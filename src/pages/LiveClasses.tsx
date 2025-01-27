import React, { useState } from 'react';
import styled from 'styled-components';
import { FaClock, FaUser, FaVideo, FaCalendar } from 'react-icons/fa';

const LiveClassesPage = styled.div`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.background};
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
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled.button<{ $isActive?: boolean }>`
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  border: none;
  background: ${({ theme, $isActive }) => 
    $isActive ? theme.primary : theme.cardBackground};
  color: ${({ theme, $isActive }) => 
    $isActive ? 'white' : theme.text};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  box-shadow: 0 2px 10px ${({ theme }) => theme.shadowColor};

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const ClassesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ClassCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 10px ${({ theme }) => theme.shadowColor};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px ${({ theme }) => theme.shadowColor};
  }
`;

const ClassImage = styled.div<{ $imageUrl: string }>`
  width: 100%;
  height: 200px;
  background: url(${props => props.$imageUrl}) center/cover;
  position: relative;
`;

const LiveBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff4444;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ClassInfo = styled.div`
  padding: 1.5rem;
`;

const ClassTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const ClassMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.9rem;

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const JoinButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const LiveClasses: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const classes = [
    {
      title: "Morning Yoga Flow",
      time: "7:00 AM - 8:00 AM",
      instructor: "Sarah Wilson",
      date: "Mon, Wed, Fri",
      category: "yoga",
      image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6"
    },
    {
      title: "HIIT Cardio Blast",
      time: "6:00 PM - 7:00 PM",
      instructor: "Mike Johnson",
      date: "Tue, Thu",
      category: "hiit",
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3"
    },
    {
      title: "Zumba Dance Party",
      time: "5:00 PM - 6:00 PM",
      instructor: "Lisa Rodriguez",
      date: "Mon, Wed, Fri",
      category: "dance",
      image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e"
    }
  ];

  return (
    <LiveClassesPage>
      <Container>
        <Header>
          <Title>Live Classes Schedule</Title>
          <Subtitle>
            Join our expert instructors in real-time for an immersive fitness experience
            from the comfort of your home.
          </Subtitle>
        </Header>

        <FiltersContainer>
          <FilterButton 
            $isActive={activeFilter === 'all'} 
            onClick={() => setActiveFilter('all')}
          >
            All Classes
          </FilterButton>
          <FilterButton 
            $isActive={activeFilter === 'yoga'} 
            onClick={() => setActiveFilter('yoga')}
          >
            Yoga
          </FilterButton>
          <FilterButton 
            $isActive={activeFilter === 'hiit'} 
            onClick={() => setActiveFilter('hiit')}
          >
            HIIT
          </FilterButton>
          <FilterButton 
            $isActive={activeFilter === 'dance'} 
            onClick={() => setActiveFilter('dance')}
          >
            Dance
          </FilterButton>
        </FiltersContainer>

        <ClassesGrid>
          {classes
            .filter(classItem => activeFilter === 'all' || classItem.category === activeFilter)
            .map((classItem, index) => (
              <ClassCard key={index}>
                <ClassImage $imageUrl={classItem.image}>
                  <LiveBadge>
                    <FaVideo /> Live
                  </LiveBadge>
                </ClassImage>
                <ClassInfo>
                  <ClassTitle>{classItem.title}</ClassTitle>
                  <ClassMeta>
                    <MetaItem>
                      <FaClock />
                      {classItem.time}
                    </MetaItem>
                    <MetaItem>
                      <FaUser />
                      {classItem.instructor}
                    </MetaItem>
                    <MetaItem>
                      <FaCalendar />
                      {classItem.date}
                    </MetaItem>
                  </ClassMeta>
                  <JoinButton>Join Class</JoinButton>
                </ClassInfo>
              </ClassCard>
          ))}
        </ClassesGrid>
      </Container>
    </LiveClassesPage>
  );
};

export default LiveClasses; 