import React from 'react';
import styled from 'styled-components';
import { StatType } from '../../types';

const StatsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #ff4081;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatItem = styled.div`
  padding: 1rem;
`;

const Count = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Label = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const stats: StatType[] = [
  { count: 5000, label: "Happy Clients" },
  { count: 200, label: "Live Classes" },
  { count: 50, label: "Workout Programs" },
  { count: 95, label: "Success Rate" }
];

const Stats: React.FC = () => {
  return (
    <StatsSection>
      <Container>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <Count>{stat.count}+</Count>
              <Label>{stat.label}</Label>
            </StatItem>
          ))}
        </StatsGrid>
      </Container>
    </StatsSection>
  );
};

export default Stats; 