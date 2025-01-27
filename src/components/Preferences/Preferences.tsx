import React from 'react';
import styled from 'styled-components';
import { FaCog, FaTimes, FaSun, FaMoon, FaFont, FaPalette } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { usePreferences } from '../../context/PreferencesContext';

const PreferencesIcon = styled.button.attrs({
  'aria-label': 'Open preferences',
  type: 'button'
})`
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => `${theme.primary}15`};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: ${({ theme }) => theme.cardBackground};
  box-shadow: -2px 0 5px rgba(0,0,0,0.1);
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease;
  z-index: 1000;
  padding: 2rem;
`;

const CloseButton = styled.button.attrs({
  'aria-label': 'Close preferences',
  type: 'button'
})`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => `${theme.primary}15`};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
`;

const PreferenceSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

interface OptionProps {
  isActive?: boolean;
}

const Option = styled.button.attrs<OptionProps>((props) => ({
  'aria-pressed': props.isActive,
  type: 'button'
}))<OptionProps>`
  padding: 0.8rem;
  border: 2px solid ${props => props.isActive ? props.theme.primary : props.theme.borderColor};
  border-radius: 8px;
  background: ${props => props.isActive ? `${props.theme.primary}15` : 'transparent'};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => `${theme.primary}10`};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
`;

const FontSizeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface FontSizeButtonProps {
  children: string;
}

const FontSizeButton = styled.button.attrs<FontSizeButtonProps>((props) => ({
  'aria-label': props.children === '+' ? 'Increase font size' : 'Decrease font size',
  type: 'button'
}))<FontSizeButtonProps>`
  padding: 0.5rem;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => `${theme.primary}10`};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.borderColor};
    background: transparent;
  }
`;

const FontSizeDisplay = styled.span`
  min-width: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const Preferences: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const { 
    layout, 
    setLayout,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily
  } = usePreferences();

  return (
    <>
      <PreferencesIcon onClick={() => setIsOpen(true)}>
        <FaCog size={24} />
      </PreferencesIcon>

      <Sidebar isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>
          <FaTimes />
        </CloseButton>

        <PreferenceSection>
          <SectionTitle>
            <FaPalette /> Layout
          </SectionTitle>
          <OptionGrid>
            <Option 
              isActive={layout === 'default'}
              onClick={() => setLayout('default')}
            >
              Default
            </Option>
            <Option 
              isActive={layout === 'compact'}
              onClick={() => setLayout('compact')}
            >
              Compact
            </Option>
          </OptionGrid>
        </PreferenceSection>

        <PreferenceSection>
          <SectionTitle>
            {theme === 'light' ? <FaSun /> : <FaMoon />} Theme
          </SectionTitle>
          <OptionGrid>
            <Option 
              isActive={theme === 'light'}
              onClick={toggleTheme}
            >
              Light
            </Option>
            <Option 
              isActive={theme === 'dark'}
              onClick={toggleTheme}
            >
              Dark
            </Option>
          </OptionGrid>
        </PreferenceSection>

        <PreferenceSection>
          <SectionTitle>
            <FaFont /> Typography
          </SectionTitle>
          <FontSizeControl>
            <FontSizeButton onClick={() => setFontSize(prev => Math.max(prev - 1, 12))}>
              -
            </FontSizeButton>
            <FontSizeDisplay>{fontSize}px</FontSizeDisplay>
            <FontSizeButton onClick={() => setFontSize(prev => Math.min(prev + 1, 20))}>
              +
            </FontSizeButton>
          </FontSizeControl>
          <OptionGrid style={{ marginTop: '1rem' }}>
            <Option 
              isActive={fontFamily === 'sans-serif'}
              onClick={() => setFontFamily('sans-serif')}
            >
              Sans-serif
            </Option>
            <Option 
              isActive={fontFamily === 'serif'}
              onClick={() => setFontFamily('serif')}
            >
              Serif
            </Option>
          </OptionGrid>
        </PreferenceSection>
      </Sidebar>
    </>
  );
};

export default Preferences; 