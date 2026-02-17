import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import QuizPage from './QuizPage';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { questions } from '@/data/questions';

// Helper to render component
const renderQuizPage = () => {
  render(
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <QuizPage />
      </BrowserRouter>
    </I18nextProvider>
  );
};

describe('QuizPage', () => {
  it('renders a question from the list', async () => {
    // Ensure translation is loaded and set to Korean for test
    await i18n.changeLanguage('ko');
    renderQuizPage();

    // With randomization, we can't know for sure which question is displayed.
    // But it should be one of the questions in the list.
    // We can get the text displayed in the card title and check if it exists in data.
    
    // We expect a heading with level 2 or just the simplified check:
    // screen.getByRole('heading', { level: undefined }) might return multiple.
    // In our component: CardTitle renders a div or h3 by default? shadcn CardTitle is usually h3.
    // Let's just getAllByRole('heading') or generic text match.
    // Actually, checking if *any* valid question text is on screen is enough.
    
    // CardTitle in shadcn might render as a div or h3. 
    // The previous error showed <div class="font-semibold tracking-tight text-xl md:text-2xl leading-relaxed text-center">...</div>
    // So it's not a heading role by default.
    // Let's find by class or just check if any of the possible texts is present.
    
    // We can iterate and check if any is present.
    const possibleQuestions = questions.map(q => q.text.ko);
    const found = possibleQuestions.some(qText => screen.queryByText(qText));
    
    expect(found).toBe(true);
  });

  it('renders Likert scale options', async () => {
    await i18n.changeLanguage('ko');
    renderQuizPage();

    // Check for "매우 그렇다" (Strongly Agree)
    // We can check just one or all.
    expect(screen.getByText('매우 그렇다')).toBeInTheDocument();
    expect(screen.getByText('매우 아니다')).toBeInTheDocument();
  });

  it('updates progress on answer', async () => {
    await i18n.changeLanguage('ko');
    renderQuizPage();

    // Initial progress should be 0% at start (1st question of 48)
    // Or (0/48)*100 = 0?
    // Let's check what we implemented: (currentQuestionIndex) / total * 100
    // So 0%.
    expect(screen.getByText('0%')).toBeInTheDocument();

    // Click "Strongly Agree" button (first one is usually value 4, but let's just click any button)
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);

    // Progress should update.
    // 1 / 48 * 100 = 2.0833...
    // Math.round(2.0833) = 2.
    expect(screen.getByText('2%')).toBeInTheDocument();
  });

  it('has correct classes for mobile hover handling', async () => {
    renderQuizPage();
    const buttons = screen.getAllByRole('button');
    const button = buttons[0];

    // Check that hover effects are guarded by @media(hover:hover)
    // Check that hover effects are guarded by @media(hover:hover)
    expect(button.className).toContain('[@media(hover:hover)]:hover:text-primary');
    
    // Check that there are NO active:bg-* classes (which cause gray shade on tap)
    expect(button.className).not.toContain('active:bg-');

    // Check for focus background reset (not explicitly overridden with ! anymore, but we can check for standard focus ring if needed, or skip specific focus override check if it's default)
    // The user removed !focus:bg-background. Let's check for the new hover effect instead.
    expect(button.className).toContain('hover:bg-transparent');

    // Check that we manually applied base styles (border, bg, shadow) to replace variant="outline"
    // The user now uses standard 'border' class and 'shadow-sm'
    expect(button.className).toContain('border');
    expect(button.className).toContain('shadow-sm');

    // Check for font-weight media query guard
    const span = button.querySelector('span');
    expect(span?.className).toContain('[@media(hover:hover)]:group-hover:font-semibold');

    // Check for text color reset (only if it exists in colorClass, which varies)
    // The first button "Strongly Agree" has hover:text-primary
    expect(button.className).toContain('[@media(hover:hover)]:hover:text-primary');
  });
});
