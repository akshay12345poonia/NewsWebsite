import React, { createContext, useContext, useState } from 'react';
import { fetchNews, fetchHeadlines, searchNews } from '../utils/api';

const NewsContext = createContext();

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const getHeadlines = async (country = 'us', category = 'general') => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchHeadlines(country, category);
      setArticles(data.articles);
      setHasMore(data.totalResults > data.articles.length);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const searchArticles = async (query, sortBy = 'publishedAt') => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchNews(query, sortBy);
      setArticles(data.articles);
      setHasMore(data.totalResults > data.articles.length);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async (params) => {
    try {
      const data = await fetchNews({ ...params, page: page + 1 });
      setArticles(prev => [...prev, ...data.articles]);
      setHasMore(data.totalResults > articles.length + data.articles.length);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <NewsContext.Provider value={{
      articles,
      loading,
      error,
      hasMore,
      getHeadlines,
      searchArticles,
      loadMore
    }}>
      {children}
    </NewsContext.Provider>
  );
};