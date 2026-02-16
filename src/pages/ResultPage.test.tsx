import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ResultPage from './ResultPage';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

describe('ResultPage', () => {
  it('renders result type', async () => {
    // Force English for consistent text check
    await i18n.changeLanguage('en');
    
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ResultPage />
        </BrowserRouter>
      </I18nextProvider>
    );

    expect(screen.getByRole('heading', { level: 1, name: /The Autopilot Architect/i })).toBeInTheDocument();
  });

  it('renders action buttons', async () => {
    await i18n.changeLanguage('en');
    
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ResultPage />
        </BrowserRouter>
      </I18nextProvider>
    );

    expect(screen.getByRole('link', { name: /Retake Test/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Share Result/i })).toBeInTheDocument();
  });
});
