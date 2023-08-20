import axios from 'axios';

export const lg = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:8000' : 'https://api.localhost.com',
  headers: {
    'X-Space-App-Key': "just random string"
  }
});