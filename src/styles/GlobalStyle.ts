import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fontFamily || 'Poppins'}, sans-serif;
    line-height: 1.6;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.text};
  }

  p {
    color: ${props => props.theme.secondaryText};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    background-color: #e0e0e0 !important;
    color: #9e9e9e !important;
    cursor: not-allowed !important;
    transform: none !important;
    box-shadow: none !important;
    opacity: 0.7;
  }

  button:disabled:hover {
    transform: none !important;
    box-shadow: none !important;
  }
`;

export default GlobalStyle; 