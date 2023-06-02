import axios from 'axios';
import api from '../../constants/api.json';

export const axiosInstance = axios.create({
  baseURL: api.BASE_URL,
  headers: {
      'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use( config => {
  const token = localStorage.getItem('token');

  if(token){
    config.headers = config.headers || {};
    config.headers['authorization'] = `Bearer ${token}`;
  }

  return config;
});