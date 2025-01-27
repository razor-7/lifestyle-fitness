import { User } from '../types';

export const sessionManager = {
  setToken: (token: string) => {
    localStorage.setItem('token', token);
  },

  getToken: (): string | null => {
    return localStorage.getItem('token');
  },

  setUser: (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
  },

  getUser: (): User | null => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  clearSession: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  isSessionValid: (): boolean => {
    return !!localStorage.getItem('token');
  }
}; 