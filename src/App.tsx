import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import LiveClasses from './pages/LiveClasses';
import Contact from './pages/Contact';
import Login from './pages/Login';
import FAQ from './pages/FAQ';
import { ThemeProvider } from './context/ThemeContext';
import { PreferencesProvider } from './context/PreferencesContext';
import styled from 'styled-components';

const SkipLink = styled.a`
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;

  &:focus {
    position: fixed;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    padding: 1rem;
    background: ${({ theme }) => theme.primary};
    color: white;
    z-index: 9999;
    outline: none;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <PreferencesProvider>
        <Router>
          <SkipLink href="#main-content">
            Skip to main content
          </SkipLink>
          <Navbar />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/live-classes" element={<LiveClasses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </Router>
      </PreferencesProvider>
    </ThemeProvider>
  );
};

export default App; 