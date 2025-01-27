import React from 'react';
import styled from 'styled-components';

const CTASection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #009688 0%, #00796b 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
`;

const Description = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.button`
  padding: 1.2rem 3.5rem;
  font-size: 1.1rem;
  background-color: white;
  color: #009688;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  }

  &:disabled {
    background-color: rgba(255, 255, 255, 0.7);
    color: rgba(0, 150, 136, 0.5);
  }
`;

const CallToAction: React.FC = () => {
  return (
    <CTASection>
      <Container>
        <Title>Ready to Start Your Fitness Journey?</Title>
        <Description>
          Join our community today and get access to live classes, personal training,
          and expert guidance to achieve your fitness goals.
        </Description>
        <CTAButton>Join Now</CTAButton>
      </Container>
    </CTASection>
  );
};

export default CallToAction; 