import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
`;

const FAQItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.cardBackground};
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadowColor};

  h3 {
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.secondaryText};
    line-height: 1.6;
  }
`;

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "What are your operating hours?",
      answer: "We are open 24/7 for our members. Staff is available from 6am to 10pm daily."
    },
    {
      question: "Do you offer personal training?",
      answer: "Yes, we offer personal training with certified trainers. You can book sessions individually or in packages."
    },
    // Add more FAQ items as needed
  ];

  return (
    <FAQContainer>
      <h1>Frequently Asked Questions</h1>
      {faqItems.map((item, index) => (
        <FAQItem
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ; 