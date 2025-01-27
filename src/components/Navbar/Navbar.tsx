import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaDumbbell, FaBars, FaTimes } from 'react-icons/fa';
import Preferences from '../Preferences/Preferences';

const Nav = styled.nav.attrs({
  role: 'navigation',
  'aria-label': 'Main navigation'
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.navBackground};
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadowColor};
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const MainContent = styled.div`
  margin-top: 80px; // Add space for fixed navbar
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};

  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 250px;
    flex-direction: column;
    align-items: flex-start;
    background: ${({ theme }) => theme.navBackground};
    padding: 80px 2rem 2rem 2rem;
    transition: right 0.3s ease;
    box-shadow: ${({ isOpen }) => (isOpen ? '-5px 0 15px rgba(0,0,0,0.1)' : 'none')};
    z-index: 999;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  text-decoration: none;
  color: ${({ theme }) => theme.navText};
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    
    &:after {
      width: 100%;
    }
  }

  ${props => props.$isActive && `
    color: ${props.theme.primary};
    font-weight: 600;
  `}

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 0;
    width: 100%;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const MobileMenuButton = styled.button<{ isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 998;
  }
`;

const PreferencesWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <Nav>
        <Logo>
          <Link 
            to="/" 
            aria-label="Home"
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <FaDumbbell aria-hidden="true" />
            <span>Life Style Fun & Fitness</span>
          </Link>
        </Logo>
        <NavRight>
          <NavLinks 
            isOpen={isOpen}
            aria-hidden={!isOpen}
            role="menu"
          >
            <NavLink 
              to="/" 
              $isActive={location.pathname === "/"} 
              onClick={closeMenu}
              role="menuitem"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Home
            </NavLink>
            <NavLink to="/about" $isActive={location.pathname === "/about"} onClick={closeMenu}>
              About Us
            </NavLink>
            <NavLink to="/live-classes" $isActive={location.pathname === "/live-classes"} onClick={closeMenu}>
              Live Classes
            </NavLink>
            <NavLink to="/contact" $isActive={location.pathname === "/contact"} onClick={closeMenu}>
              Contact
            </NavLink>
            <NavLink to="/login" $isActive={location.pathname === "/login"} onClick={closeMenu}>
              Login
            </NavLink>
          </NavLinks>
          <NavControls>
            <PreferencesWrapper>
              <Preferences />
            </PreferencesWrapper>
            <MobileMenuButton 
              onClick={toggleMenu}
              isOpen={isOpen}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            </MobileMenuButton>
          </NavControls>
        </NavRight>
      </Nav>
      <MainContent id="main-content" role="main" />
      <Overlay 
        isOpen={isOpen} 
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar; 