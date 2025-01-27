import React from 'react';
import styled from 'styled-components';
import { ServiceType } from '../../types';
import { FaDumbbell, FaVideo, FaUsers, FaHeart, FaAppleAlt, FaRunning } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 8rem 2rem;
  background-color: #fafafa;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 4rem;
  color: #1a1a1a;
  font-weight: 800;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: #009688;
    border-radius: 2px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  padding: 1rem;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  h3 {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
    color: #1a1a1a;
    font-weight: 700;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #009688;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: rgba(0,150,136,0.1);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'dumbbell':
      return <FaDumbbell />;
    case 'video':
      return <FaVideo />;
    case 'users':
      return <FaUsers />;
    case 'heart':
      return <FaHeart />;
    case 'apple':
      return <FaAppleAlt />;
    case 'running':
      return <FaRunning />;
    default:
      return <FaDumbbell />;
  }
};

const services: ServiceType[] = [
  {
    title: "Personal Training",
    description: "One-on-one customized workout plans tailored to your goals",
    icon: "dumbbell"
  },
  {
    title: "Live Classes",
    description: "Join our energetic group sessions from the comfort of your home",
    icon: "video"
  },
  {
    title: "Community Support",
    description: "Be part of our supportive fitness community",
    icon: "users"
  },
  {
    title: "Nutrition Guidance",
    description: "Expert advice on maintaining a balanced diet",
    icon: "apple"
  },
  {
    title: "Cardio Programs",
    description: "Effective cardio workouts for all fitness levels",
    icon: "running"
  },
  {
    title: "Wellness Coaching",
    description: "Holistic approach to health and wellness",
    icon: "heart"
  }
];

const Services: React.FC = () => {
  return (
    <ServicesSection>
      <Container>
        <Title>Our Services</Title>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <IconWrapper>
                {getIcon(service.icon)}
              </IconWrapper>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services; 