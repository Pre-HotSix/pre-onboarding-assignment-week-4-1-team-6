import axios from 'axios';

export const apiRoot = axios.create({
  baseURL: '',
  headers: { 
    'Content-Type': 'application/json',
  },
});