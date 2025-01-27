import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Programs from '../components/Programs/Programs';
import Trainers from '../components/Trainers/Trainers';
import MembershipPlans from '../components/MembershipPlans/MembershipPlans';
import Testimonials from '../components/Testimonials/Testimonials';
import CallToAction from '../components/CallToAction/CallToAction';
import Footer from '../components/Footer/Footer';
import { scrollToSection } from '../utils/scrollToSection';

const HomePage = styled.main.attrs({
  role: 'main',
  'aria-label': 'Home page content'
})`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ theme }) => theme.primary};
  transform-origin: 0%;
  z-index: 1000;
`;

const FloatingButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 100;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

const BackgroundGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
    ${({ theme }) => `${theme.primary}15`} 0%,
    transparent 50%);
  pointer-events: none;
  z-index: -1;
  opacity: 0.7;
  transition: opacity 0.3s ease;
`;

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const location = useLocation();
  
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    }
  }, [location.state]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <HomePage>
      <ProgressBar style={{ scaleX }} />
      <BackgroundGradient />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Hero />
      </motion.div>

      <motion.div
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Services />
      </motion.div>

      <motion.div
        id="programs"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Programs />
      </motion.div>

      <motion.div
        id="trainers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Trainers />
      </motion.div>

      <motion.div
        id="membership"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <MembershipPlans />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <CallToAction />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Footer />
      </motion.div>

      <FloatingButton
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </FloatingButton>
    </HomePage>
  );
};

export default Home; 