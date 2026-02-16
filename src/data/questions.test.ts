import { describe, it, expect } from 'vitest';
import { questions } from './questions';

describe('Questions Data Integrity', () => {
  it('should have exactly 48 questions', () => {
    expect(questions.length).toBe(48);
  });

  it('should have unique IDs', () => {
    const ids = questions.map(q => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have valid structure for all questions', () => {
    questions.forEach(question => {
      expect(question).toHaveProperty('id');
      expect(question).toHaveProperty('category');
      expect(question).toHaveProperty('text');
      expect(question.text).toHaveProperty('en');
      expect(question.text).toHaveProperty('ko');
    });
  });

  it('should not have empty text fields', () => {
    questions.forEach(question => {
      expect(question.text.en.trim()).not.toBe('');
      expect(question.text.ko.trim()).not.toBe('');
      expect(question.category.trim()).not.toBe('');
    });
  });

  it('should have 12 questions per category', () => {
    const categories = questions.map(q => q.category);
    const uniqueCategories = [...new Set(categories)];

    // We expect 4 categories
    expect(uniqueCategories.length).toBe(4);

    // Each category should occur 12 times
    uniqueCategories.forEach(category => {
      const count = questions.filter(q => q.category === category).length;
      expect(count).toBe(12);
    });
  });
});
