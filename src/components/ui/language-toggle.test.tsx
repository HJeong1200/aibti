import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LanguageToggle } from './language-toggle';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe('LanguageToggle', () => {
  it('renders correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageToggle />
      </I18nextProvider>
    );
    // Initial state is Korean, so button shows "EN" to switch to English?
    // Wait, let's check the logic.
    // {i18n.language === "ko" ? "EN" : "한국어"}
    // If language is 'ko', it shows 'EN'.
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('toggles language on click', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageToggle />
      </I18nextProvider>
    );
    
    const button = screen.getByText('EN');
    fireEvent.click(button);
    
    // Now language should be 'en', so button shows "한국어"
    expect(screen.getByText('한국어')).toBeInTheDocument();
    
    // Click again to switch back
    fireEvent.click(screen.getByText('한국어'));
    expect(screen.getByText('EN')).toBeInTheDocument();
  });
});
