import axios, { 
  InternalAxiosRequestConfig, 
  AxiosResponse, 
  AxiosError 
} from 'axios';
import { sessionManager } from './sessionManager';
import { logger } from './logger';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = sessionManager.getToken();
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error: AxiosError) => {
    logger.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      sessionManager.clearSession();
      window.location.href = '/login';
    }
    logger.error('API Response Error:', error);
    return Promise.reject(error);
  }
);

export { apiClient }; 