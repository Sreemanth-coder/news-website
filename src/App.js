import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/news');
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                const data = await response.json();
                setNews(data.articles || []);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    if (loading) return <p>Loading news...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="App">
            <header className="App-header">
                <h1>Latest News</h1>
            </header>
            <main>
                {news.map((article, index) => (
                    <article key={index} className="news-article">
                        <h2>{article.title}</h2>
                        {article.urlToImage && (
                            <img src={article.urlToImage} alt={article.title} />
                        )}
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                    </article>
                ))}
            </main>
        </div>
    );
}

export default App;
