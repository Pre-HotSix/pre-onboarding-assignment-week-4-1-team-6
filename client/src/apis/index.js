import axios from 'axios';

export const apiRoot = axios.create({
  headers: { 'Content-Type': 'application/json' },
});
