import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(${({ theme }) => theme.heroOverlay}, ${({ theme }) => theme.heroOverlay}), 
    url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3');
  background-size: cover;
  background-position: center;
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
    background: linear-gradient(
      45deg,
      ${({ theme }) => `${theme.primary}4D`},
      ${({ theme }) => `${theme.primaryHover}4D`}
    );
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  padding: 2rem;
  z-index: 2;
  animation: fadeIn 1s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const Subtitle = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  background-color: #009688;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled) {
    background-color: #00796b;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);

    &:before {
      left: 100%;
    }
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #9e9e9e;
    &:before {
      display: none;
    }
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>Empowering Lives, One Home Workout at a Time!</Title>
        <Subtitle>
          Join Life Style's revolutionary fitness initiative for effective home workouts
          without equipment
        </Subtitle>
        <CTAButton>Start Your Fitness Journey</CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 