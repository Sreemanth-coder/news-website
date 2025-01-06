import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [allNews, setAllNews] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setAllNews(data.articles || []);
        setNews(data.articles || []);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setNews(allNews);
    } else {
      const filteredNews = allNews.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setNews(filteredNews);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim() === '') {
      setNews(allNews);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="latest-news-title">LATEST News</h1>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="search-bar"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
      </header>
      <main>
        {news.map((article, index) => (
          <article
            key={index}
            className="news-article"
            onClick={() => window.open(article.url, '_blank')}
          >
            <h2>{article.title}</h2>
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} />
            )}
            <p>{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Read more
            </a>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
