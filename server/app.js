const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Replace with your valid NewsAPI key
const NEWS_API_KEY = 'aad5b15f1a9142d0a2b1dc4ee64fe5be';
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

app.get('/api/news', async (req, res) => {
    try {
        const response = await axios.get(NEWS_API_URL, {
            params: {
                country: 'us',
                apiKey: NEWS_API_KEY, // Pass API key as a query parameter
            },
        });
        res.json(response.data); // Send news data to frontend
    } catch (error) {
        console.error('Error fetching news:', error.message);
        res.status(500).json({ error: 'Failed to fetch news.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
