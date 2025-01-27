import React from 'react';
import styled from 'styled-components';

const TrainersSection = styled.section`
  padding: 8rem 2rem;
  background-color: ${({ theme }) => theme.secondaryBackground};
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 4rem;
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

const TrainersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  padding: 1rem;
`;

const TrainerCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadowColor};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px ${({ theme }) => theme.shadowColor};
  }
`;

const TrainerImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const TrainerInfo = styled.div`
  padding: 1.5rem;
`;

const TrainerName = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TrainerSpecialty = styled.p`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TrainerBio = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  line-height: 1.6;
  font-size: 0.95rem;
`;

const trainers = [
  {
    name: "Sarah Johnson",
    specialty: "HIIT & Strength Training",
    bio: "ACE certified trainer with 8+ years of experience in high-intensity training.",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0"
  },
  {
    name: "Mike Chen",
    specialty: "Yoga & Meditation",
    bio: "RYT-500 certified yoga instructor specializing in mindfulness and flexibility.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883"
  },
  {
    name: "Lisa Rodriguez",
    specialty: "Nutrition & Wellness",
    bio: "Certified nutritionist helping clients achieve their health goals through balanced eating.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110"
  }
];

const Trainers: React.FC = () => {
  return (
    <TrainersSection>
      <Container>
        <Title>Meet Our Expert Trainers</Title>
        <TrainersGrid>
          {trainers.map((trainer, index) => (
            <TrainerCard key={index}>
              <TrainerImage src={trainer.image} alt={trainer.name} />
              <TrainerInfo>
                <TrainerName>{trainer.name}</TrainerName>
                <TrainerSpecialty>{trainer.specialty}</TrainerSpecialty>
                <TrainerBio>{trainer.bio}</TrainerBio>
              </TrainerInfo>
            </TrainerCard>
          ))}
        </TrainersGrid>
      </Container>
    </TrainersSection>
  );
};

export default Trainers; 