import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaDumbbell, FaUsers, FaMedal } from 'react-icons/fa';

const AboutPage = styled.div`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
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
    background-color: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 1.5rem auto 0;
  line-height: 1.6;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextSection = styled.div`
  p {
    color: ${({ theme }) => theme.secondaryText};
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.05rem;
  }
`;

const ImageSection = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadowColor};
  
  &:before {
    content: '';
    display: block;
    padding-top: 75%;
  }
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 4rem 0;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 15px ${({ theme }) => theme.shadowColor};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.9rem;
`;

const About: React.FC = () => {
  return (
    <AboutPage>
      <Container>
        <Header>
          <Title>About Life Style Fun & Fitness</Title>
          <Subtitle>
            Transforming lives through fitness, wellness, and community since 2010
          </Subtitle>
        </Header>

        <StatsGrid>
          <StatCard>
            <FaUsers />
            <StatNumber>5000+</StatNumber>
            <StatLabel>Happy Members</StatLabel>
          </StatCard>
          <StatCard>
            <FaDumbbell />
            <StatNumber>100+</StatNumber>
            <StatLabel>Weekly Classes</StatLabel>
          </StatCard>
          <StatCard>
            <FaMedal />
            <StatNumber>50+</StatNumber>
            <StatLabel>Expert Trainers</StatLabel>
          </StatCard>
          <StatCard>
            <FaHeart />
            <StatNumber>12+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatCard>
        </StatsGrid>

        <Content>
          <TextSection>
            <p>
              Welcome to Life Style Fun & Fitness, where we believe in making fitness 
              accessible, enjoyable, and effective for everyone. Our journey began 
              with a simple mission: to help people achieve their fitness goals while 
              having fun.
            </p>
            <p>
              We understand that everyone's fitness journey is unique. That's why we 
              offer personalized programs, expert guidance, and a supportive community 
              to help you reach your goals. Our state-of-the-art facilities and diverse 
              range of programs ensure that you'll find the perfect fit for your lifestyle.
            </p>
            <p>
              Our team of certified trainers brings years of experience and passion to 
              every session, ensuring you get the most out of your workout while maintaining 
              proper form and technique. We're not just a gym – we're a community dedicated 
              to your success.
            </p>
          </TextSection>
          <ImageSection>
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
              alt="Fitness Training"
            />
          </ImageSection>
        </Content>
      </Container>
    </AboutPage>
  );
};

export default About; 