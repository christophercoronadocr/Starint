import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://localhost:7062/api',
  headers: {
    Accept: 'application/json',
    "Access-Control-Allow-Origin": '*'
  }
});