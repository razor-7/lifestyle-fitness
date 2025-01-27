import { Theme, FontSize, Layout } from '../types';

export const preferences = {
  getTheme: (): Theme => {
    return (localStorage.getItem('theme') as Theme) || 'light';
  },

  setTheme: (theme: Theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  },

  getFontSize: (): FontSize => {
    const size = Number(localStorage.getItem('fontSize')) || 16;
    return (size as FontSize);
  },

  setFontSize: (size: FontSize) => {
    localStorage.setItem('fontSize', size.toString());
    document.documentElement.style.fontSize = `${size}px`;
  },

  getLayout: (): Layout => {
    return (localStorage.getItem('layout') as Layout) || 'default';
  },

  setLayout: (layout: Layout) => {
    localStorage.setItem('layout', layout);
  },

  resetPreferences: () => {
    localStorage.removeItem('theme');
    localStorage.removeItem('fontSize');
    localStorage.removeItem('layout');
  }
}; 