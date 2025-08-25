import axios from 'axios';

const API_KEY = '1767f54df33740e2ac2a782c914976b9';
const BASE_URL = 'https://newsapi.org/v2';

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY
  }
});

export const fetchHeadlines = async (country = 'us', category = 'general') => {
  const response = await api.get('/top-headlines', {
    params: { country, category }
  });
  return response.data;
};

export const searchNews = async (query, sortBy = 'publishedAt') => {
  const response = await api.get('/everything', {
    params: { q: query, sortBy }
  });
  return response.data;
};

export const fetchNews = async (params) => {
  const response = await api.get('/everything', { params });
  return response.data;
};