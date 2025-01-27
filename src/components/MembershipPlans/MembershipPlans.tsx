import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck, FaCrown, FaDumbbell, FaRocket } from 'react-icons/fa';

const PlansSection = styled.section`
  padding: 8rem 2rem;
  background: ${({ theme }) => theme.background};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(135deg, ${({ theme }) => `${theme.primary}15`} 0%, ${({ theme }) => `${theme.primaryHover}15`} 100%);
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  font-weight: 800;
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 4rem;
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const PlanCard = styled.div<{ featured?: boolean; selected?: boolean }>`
  background: ${({ theme }) => theme.cardBackground};
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: ${props => props.selected 
    ? '0 20px 40px rgba(0,0,0,0.15)' 
    : '0 10px 30px rgba(0,0,0,0.05)'};
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  border: 3px solid ${props => {
    if (props.selected) return props.theme.primary;
    if (props.featured) return props.theme.primary + '50';
    return 'transparent';
  }};
  transform: ${props => props.selected ? 'translateY(-10px)' : 'none'};
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
`;

const PlanIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
`;

const PlanBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const PlanName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const PlanPrice = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.secondaryText};
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1rem;

  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 1.2rem;
  }
`;

const PlanButton = styled.button<{ selected?: boolean }>`
  width: 100%;
  padding: 1rem;
  background: ${props => props.selected ? props.theme.primaryHover : props.theme.primary};
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
  }
`;

const MembershipPlans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      icon: <FaDumbbell />,
      name: "Basic",
      price: "29",
      features: [
        "Access to gym equipment",
        "2 group classes per week",
        "Basic workout plan",
        "Locker room access",
        "Mobile app access"
      ]
    },
    {
      icon: <FaCrown />,
      name: "Premium",
      price: "59",
      featured: true,
      features: [
        "Unlimited gym access",
        "Unlimited group classes",
        "Personalized workout plan",
        "Nutrition consultation",
        "1 PT session per month",
        "Priority booking"
      ]
    },
    {
      icon: <FaRocket />,
      name: "Elite",
      price: "99",
      features: [
        "All Premium features",
        "4 PT sessions per month",
        "Monthly body composition",
        "Recovery sessions",
        "Priority booking",
        "Exclusive events access"
      ]
    }
  ];

  return (
    <PlansSection>
      <Container>
        <Title>Choose Your Plan</Title>
        <Subtitle>
          Select the perfect membership plan that fits your fitness goals and lifestyle
        </Subtitle>
        <PlansGrid>
          {plans.map((plan, index) => (
            <PlanCard 
              key={index}
              featured={plan.featured}
              selected={selectedPlan === plan.name}
              onClick={() => setSelectedPlan(plan.name)}
            >
              {plan.featured && <PlanBadge>Most Popular</PlanBadge>}
              <PlanIcon>{plan.icon}</PlanIcon>
              <PlanName>{plan.name}</PlanName>
              <PlanPrice>
                ${plan.price}<span>/month</span>
              </PlanPrice>
              <FeaturesList>
                {plan.features.map((feature, idx) => (
                  <Feature key={idx}>
                    <FaCheck /> {feature}
                  </Feature>
                ))}
              </FeaturesList>
              <PlanButton selected={selectedPlan === plan.name}>
                {selectedPlan === plan.name ? 'Selected' : 'Choose Plan'}
              </PlanButton>
            </PlanCard>
          ))}
        </PlansGrid>
      </Container>
    </PlansSection>
  );
};

export default MembershipPlans; 