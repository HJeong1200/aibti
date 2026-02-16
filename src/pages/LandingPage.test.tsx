import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LandingPage from './LandingPage';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

describe('LandingPage', () => {
  it('renders hero title correctly', async () => {
    await i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      </I18nextProvider>
    );

    expect(screen.getByText(/AI Persona/i)).toBeInTheDocument();
  });

  it('renders start button', async () => {
    await i18n.changeLanguage('en');
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      </I18nextProvider>
    );
    
    expect(screen.getByRole('link', { name: /Start Test/i })).toBeInTheDocument();
  });
});
