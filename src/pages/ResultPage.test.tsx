
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ResultPage from './ResultPage';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

describe('ResultPage', () => {
  it('renders result type based on calculated score', async () => {
    // Force English for consistent text check
    await i18n.changeLanguage('en');
    
    // Provide answers that result in Secondary traits (Score ~0.33) -> SRTC
    const mockState = { answers: { 1: 4, 13: 4, 25: 4, 37: 4 } };

    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={[{ pathname: '/result', state: mockState }]}>
           <Routes>
             <Route path="/result" element={<ResultPage />} />
           </Routes>
        </MemoryRouter>
      </I18nextProvider>
    );

    // Expect the corresponding Title from en.json (SRTC = The Code Purist)
    expect(screen.getAllByText(/The Code Purist/i)[0]).toBeInTheDocument();
  });

  it('renders action buttons provided state exists', async () => {
    await i18n.changeLanguage('en');
    
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={[{ pathname: '/result', state: { answers: { 1: 4 } } }]}>
           <Routes>
             <Route path="/result" element={<ResultPage />} />
           </Routes>
        </MemoryRouter>
      </I18nextProvider>
    );

    expect(screen.getByRole('link', { name: /Retake Test/i })).toBeInTheDocument();
    
    // Check for "Share AI-BTI" instead of "Share Result"
    expect(screen.getByRole('button', { name: /Share AI-BTI/i })).toBeInTheDocument();

    // Check for screenshot prompt
    expect(screen.getByText(/Don't forget to save your result with a screenshot!/i)).toBeInTheDocument();
  });

  it('redirects to test if no answers provided', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={['/result']}>
          <Routes>
            <Route path="/result" element={<ResultPage />} />
            <Route path="/test" element={<div>Test Page</div>} />
          </Routes>
        </MemoryRouter>
      </I18nextProvider>
    );
    expect(screen.getByText('Test Page')).toBeInTheDocument();
  });
});
