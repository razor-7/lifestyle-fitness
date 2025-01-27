import React from 'react';
import styled from 'styled-components';

const ProgramsSection = styled.section`
  padding: 8rem 2rem;
  background-color: ${({ theme }) => theme.background};
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

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProgramCard = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);

    img {
      transform: scale(1.1);
    }

    .overlay {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

const ProgramImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  transition: background 0.3s ease;
`;

const ProgramTitle = styled.h3`
  color: white;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const ProgramDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
`;

const programs = [
  {
    title: "Strength Training",
    description: "Build muscle and increase strength with expert guidance",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
  },
  {
    title: "HIIT Workouts",
    description: "High-intensity interval training for maximum results",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3"
  },
  {
    title: "Yoga & Meditation",
    description: "Find balance with mind-body wellness programs",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597"
  }
];

const Programs: React.FC = () => {
  return (
    <ProgramsSection>
      <Container>
        <Title>Our Programs</Title>
        <ProgramsGrid>
          {programs.map((program, index) => (
            <ProgramCard key={index}>
              <ProgramImage src={program.image} alt={program.title} />
              <Overlay className="overlay">
                <ProgramTitle>{program.title}</ProgramTitle>
                <ProgramDescription>{program.description}</ProgramDescription>
              </Overlay>
            </ProgramCard>
          ))}
        </ProgramsGrid>
      </Container>
    </ProgramsSection>
  );
};

export default Programs; 