import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactPage = styled.div`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  font-weight: 800;
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 4rem;
  font-size: 1.1rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadowColor};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  &:last-child {
    border-bottom: none;
  }

  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
  }
`;

const InfoContent = styled.div`
  h3 {
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    color: ${({ theme }) => theme.secondaryText};
    line-height: 1.5;
  }
`;

const ContactForm = styled.form`
  background: ${({ theme }) => theme.cardBackground};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadowColor};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.primary}33`};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.primary}33`};
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <ContactPage>
      <Container>
        <Title>Get in Touch</Title>
        <Subtitle>Have questions? We'd love to hear from you.</Subtitle>
        
        <ContactGrid>
          <ContactInfo>
            <InfoItem>
              <FaPhone />
              <InfoContent>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </InfoContent>
            </InfoItem>
            <InfoItem>
              <FaEnvelope />
              <InfoContent>
                <h3>Email</h3>
                <p>info@lifestylefitness.com</p>
              </InfoContent>
            </InfoItem>
            <InfoItem>
              <FaMapMarkerAlt />
              <InfoContent>
                <h3>Location</h3>
                <p>123 Fitness Street<br />Wellness City, WC 12345</p>
              </InfoContent>
            </InfoItem>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <FormGrid>
              <FormGroup>
                <Label>First Name</Label>
                <Input type="text" required />
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <Input type="text" required />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" required />
              </FormGroup>
              <FormGroup>
                <Label>Phone</Label>
                <Input type="tel" />
              </FormGroup>
              <FormGroup className="full-width">
                <Label>Message</Label>
                <TextArea required />
              </FormGroup>
            </FormGrid>
            <SubmitButton type="submit" disabled={isSubmitting}>
              <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactPage>
  );
};

export default Contact; 