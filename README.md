# News Website (MERN Stack)

A simple News website built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This application fetches the latest news headlines using the [NewsAPI](https://newsapi.org) and displays them in a clean, user-friendly interface.

## Features

- Fetches the latest news articles from multiple sources using the News API.
- Displays news articles with their title, image, description, and link to the full article.
- Built with **React** on the frontend and **Express.js** on the backend.

## Tech Stack

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express.js
- **API**: NewsAPI (for fetching news articles)
- **Styling**: Custom CSS
- **Environment Variables**: Used to store sensitive data like the API key

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js** (v16 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) - comes with Node.js
- **NewsAPI Key** - You can get a free API key by signing up at [NewsAPI](https://newsapi.org/)

## Installation

### Step 1: Clone the repository

```bash
git clone https://github.com/your-username/news-website.git
cd news-website


Apologies for the confusion! Here is the entire section in code format for the `README.md` file:

```markdown
### Step 2: Backend Setup

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the backend folder and add your NewsAPI key:

   ```makefile
   NEWS_API_KEY=your_news_api_key_here
   ```

4. Start the backend server:

   ```bash
   node app.js
   ```

   The backend will run on `http://localhost:5000`.

### Step 3: Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

### Step 4: Open the App

Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the latest news displayed.

## How It Works

- The React app sends a request to the Express backend at `http://localhost:5000/api/news`.
- The backend fetches news from the NewsAPI and returns the articles in JSON format.
- The frontend React app processes this data and displays the news articles, including titles, images, descriptions, and links to full articles.

## Troubleshooting

1. **CORS Issues**: If you encounter any CORS issues while running the frontend and backend on different ports, ensure you have `cors` enabled in your backend (`app.js`).

2. **Missing API Key**: Make sure your `.env` file in the backend contains the correct API key (`NEWS_API_KEY=your_news_api_key_here`).

3. **OpenSSL Error (Node.js >= 17)**: If you face the `ERR_OSSL_EVP_UNSUPPORTED` error, add the `--openssl-legacy-provider` flag when running the backend:

   ```bash
   node --openssl-legacy-provider app.js
   ```

## License

This project is open-source and available under the [MIT License](LICENSE).
