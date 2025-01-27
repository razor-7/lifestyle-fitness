import React, { createContext, useContext, useState, useEffect } from 'react';

interface PreferencesContextType {
  layout: 'default' | 'compact';
  setLayout: (layout: 'default' | 'compact') => void;
  fontSize: number;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
  fontFamily: 'sans-serif' | 'serif';
  setFontFamily: React.Dispatch<React.SetStateAction<'sans-serif' | 'serif'>>;
}

const PreferencesContext = createContext<PreferencesContextType>({
  layout: 'default',
  setLayout: () => {},
  fontSize: 16,
  setFontSize: () => {},
  fontFamily: 'sans-serif',
  setFontFamily: () => {},
});

export const PreferencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [layout, setLayout] = useState<'default' | 'compact'>(() => {
    const saved = localStorage.getItem('layout');
    return (saved as 'default' | 'compact') || 'default';
  });

  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('fontSize');
    return saved ? parseInt(saved) : 16;
  });

  const [fontFamily, setFontFamily] = useState<'sans-serif' | 'serif'>(() => {
    const saved = localStorage.getItem('fontFamily');
    return (saved as 'sans-serif' | 'serif') || 'sans-serif';
  });

  useEffect(() => {
    localStorage.setItem('layout', layout);
    localStorage.setItem('fontSize', fontSize.toString());
    localStorage.setItem('fontFamily', fontFamily);

    // Apply font settings to root element
    document.documentElement.style.fontSize = `${fontSize}px`;
    document.documentElement.style.fontFamily = fontFamily;
  }, [layout, fontSize, fontFamily]);

  return (
    <PreferencesContext.Provider 
      value={{ 
        layout, 
        setLayout, 
        fontSize, 
        setFontSize,
        fontFamily,
        setFontFamily
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => useContext(PreferencesContext); 