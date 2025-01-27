import { User } from '../types';
import { apiClient } from './apiClient';
import { sessionManager } from './sessionManager';
import { logger } from './logger';

export interface AuthResponse {
  token: string;
  user: User;
}

export const auth = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      if (response.data.token) {
        sessionManager.setToken(response.data.token);
        sessionManager.setUser(response.data.user);
      }
      return response.data;
    } catch (error) {
      logger.error('Login failed:', error);
      throw error;
    }
  },

  register: async (userData: Partial<User>): Promise<AuthResponse> => {
    try {
      const response = await apiClient.post('/auth/register', userData);
      if (response.data.token) {
        sessionManager.setToken(response.data.token);
        sessionManager.setUser(response.data.user);
      }
      return response.data;
    } catch (error) {
      logger.error('Registration failed:', error);
      throw error;
    }
  },

  logout: () => {
    sessionManager.clearSession();
    window.location.href = '/login';
  },

  isAuthenticated: (): boolean => {
    return !!sessionManager.getToken();
  }
}; 