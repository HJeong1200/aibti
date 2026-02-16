import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import QuizPage from './QuizPage';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

describe('QuizPage', () => {
  it('renders question', () => {
    // Ensure translation is loaded
    i18n.changeLanguage('ko');
    
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <QuizPage />
        </BrowserRouter>
      </I18nextProvider>
    );

    // q1: "새로운 에러 스택 트레이스를 만났을 때, 가장 먼저 하는 행동은?"
    expect(screen.getByText(/새로운 에러 스택 트레이스를 만났을 때/i)).toBeInTheDocument();
  });

  it('updates progress on answer', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <QuizPage />
        </BrowserRouter>
      </I18nextProvider>
    );

    // Initial progress 10%
    expect(screen.getByText('10%')).toBeInTheDocument();

    // Click option A
    const buttons = screen.getAllByRole('button');
    // First button might be... wait, there are no other buttons?
    // Options are buttons.
    const optionA = buttons[0]; 
    fireEvent.click(optionA);

    // Progress 20%
    expect(screen.getByText('20%')).toBeInTheDocument();
  });
});
