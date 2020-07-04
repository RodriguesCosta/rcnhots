import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hots-api.vercel.app/api',
});

export default api;
