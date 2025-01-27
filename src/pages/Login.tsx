import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: 2rem;
  background: ${({ theme }) => theme.secondaryBackground};
  background-image: linear-gradient(
    135deg,
    ${({ theme }) => `${theme.primary}15`} 0%,
    ${({ theme }) => `${theme.primaryHover}15`} 100%
  );
`;

const LoginCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px ${({ theme }) => theme.shadowColor};
  width: 100%;
  max-width: 450px;

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  font-size: clamp(1.8rem, 4vw, 2.2rem);
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  position: relative;
`;

const InputIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.secondaryText};
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  font-size: 1rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.primary}33`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondaryText};
  }
`;

const ShowPasswordButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.secondaryText};
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const RememberMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -0.5rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 0.9rem;
`;

const Checkbox = styled.input`
  cursor: pointer;
  accent-color: ${({ theme }) => theme.primary};
`;

const ForgotPassword = styled(Link)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Divider = styled.div`
  text-align: center;
  margin: 2rem 0;
  position: relative;
  
  &:before, &:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background: ${({ theme }) => theme.borderColor};
  }
  
  &:before { left: 0; }
  &:after { right: 0; }
  
  span {
    background: ${({ theme }) => theme.cardBackground};
    padding: 0 1.5rem;
    color: ${({ theme }) => theme.secondaryText};
    font-size: 0.9rem;
    position: relative;
    z-index: 1;
  }
`;

const TermsText = styled.p`
  text-align: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.secondaryText};
  margin-top: 2rem;
  
  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignUpButton = styled(LoginButton)`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const isFormValid = formData.email && formData.password;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    try {
      // Add your login logic here
      console.log('Logging in with:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LoginPage>
      <LoginCard>
        <Title>Welcome Back</Title>
        <Subtitle>Sign in to continue your fitness journey</Subtitle>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <InputIcon>
              <FaEnvelope />
            </InputIcon>
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
            <ShowPasswordButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </ShowPasswordButton>
          </FormGroup>

          <RememberMeContainer>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember me
            </CheckboxLabel>
            <ForgotPassword to="/forgot-password">
              Forgot Password?
            </ForgotPassword>
          </RememberMeContainer>

          <LoginButton type="submit" disabled={!isFormValid || isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </LoginButton>
        </Form>

        <Divider>
          <span>New to Life Style Fun & Fitness?</span>
        </Divider>

        <Link to="/signup">
          <SignUpButton type="button">
            Create Account
          </SignUpButton>
        </Link>

        <TermsText>
          By signing in, you agree to our{' '}
          <Link to="/terms">Terms of Service</Link> and{' '}
          <Link to="/privacy">Privacy Policy</Link>
        </TermsText>
      </LoginCard>
    </LoginPage>
  );
};

export default Login; 