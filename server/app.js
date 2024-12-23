const cors = require('cors');
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());
app.use(express.json());

// API endpoint to fetch news
app.get('/api/news', async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country: 'us',
                apiKey: process.env.NEWS_API_KEY, // Use environment variable
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching news:', error.message);
        res.status(500).json({ error: 'Failed to fetch news.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
