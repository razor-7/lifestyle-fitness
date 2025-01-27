import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
  padding: 8rem 2rem;
  background-color: white;
  position: relative;
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  padding: 1rem;
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  text-align: left;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  &:before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 4rem;
    color: #009688;
    opacity: 0.2;
    font-family: Georgia, serif;
  }
`;

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 2rem;
  color: #444;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const Author = styled.p`
  font-weight: 700;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:before {
    content: '';
    display: block;
    width: 30px;
    height: 2px;
    background-color: #009688;
  }
`;

const testimonials = [
  {
    quote: "The online classes have transformed my fitness routine. I've never felt better!",
    author: "Sarah Johnson"
  },
  {
    quote: "Great community, amazing trainers, and convenient home workouts. Exactly what I needed!",
    author: "Mike Thompson"
  },
  {
    quote: "The personalized approach really helps me stay motivated and achieve my goals.",
    author: "Emily Davis"
  }
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialsSection>
      <Container>
        <Title>What Our Members Say</Title>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Quote>{testimonial.quote}</Quote>
              <Author>{testimonial.author}</Author>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 