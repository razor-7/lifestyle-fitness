import React from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { scrollToSection } from '../../utils/scrollToSection';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.navBackground};
  padding: 4rem 2rem;
  margin-top: 4rem;
  box-shadow: 0 -2px 4px ${({ theme }) => theme.shadowColor};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: ${({ theme }) => theme.secondaryText};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.secondaryText};
`;

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#programs" onClick={handleSectionClick('programs')}>Programs</a></li>
            <li><a href="#trainers" onClick={handleSectionClick('trainers')}>Trainers</a></li>
            <li><a href="#membership" onClick={handleSectionClick('membership')}>Membership</a></li>
            <li><a href="#services" onClick={handleSectionClick('services')}>Services</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Support</h3>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Contact Info</h3>
          <ul>
            <li>123 Fitness Street</li>
            <li>New York, NY 10001</li>
            <li>Phone: (555) 123-4567</li>
            <li>Email: info@lifestylefitness.com</li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Follow Us</h3>
          <p>Stay connected with us on social media</p>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Life Style Fun & Fitness. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 