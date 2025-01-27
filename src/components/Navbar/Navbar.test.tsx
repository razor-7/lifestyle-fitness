import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../../context/ThemeContext';
import Navbar from './Navbar';

expect.extend(toHaveNoViolations);

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveNoViolations(): R;
    }
  }
}

describe('Navbar', () => {
  it('should not have any accessibility violations', async () => {
    const { container } = render(
      <BrowserRouter>
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
      </BrowserRouter>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have proper ARIA labels', () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
      </BrowserRouter>
    );

    expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Main navigation');
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
  });
}); 