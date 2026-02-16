
import { describe, it, expect } from 'vitest';
import { calculateScore, SCORING_CONFIG } from './scoring';

describe('calculateScore', () => {
  // Helper to generate answers
  const generateAnswers = (dim: string, pVal: number, sVal: number) => {
    const answers: Record<number, number> = {};
    const config = SCORING_CONFIG[dim as keyof typeof SCORING_CONFIG];
    
    config.primary.forEach(id => answers[id] = pVal);
    config.secondary.forEach(id => answers[id] = sVal);
    
    return answers;
  };

  it('should calculate valid Vibe (Primary) score for Energy dimension', () => {
    // Primary (Vibe) questions = 4
    // Secondary (Spec) questions = 1 (Flipped = 4)
    // Avg should be 4.0
    const answers = generateAnswers('energy', 4, 1);
    const result = calculateScore(answers);
    
    expect(result.energy.score).toBe(4.0);
    expect(result.energy.trait).toBe('V');
  });

  it('should calculate valid Spec (Secondary) score for Energy dimension', () => {
    // Primary (Vibe) questions = 1
    // Secondary (Spec) questions = 4 (Flipped = 1)
    // Avg should be 1.0
    const answers = generateAnswers('energy', 1, 4);
    const result = calculateScore(answers);
    
    expect(result.energy.score).toBe(1.0);
    expect(result.energy.trait).toBe('S');
  });

  it('should handle mixed scores correctly (Threshold 2.5)', () => {
    // If score is exactly 2.5, it should be Secondary.
    // Needs sum = 30.
    // 12 questions. 
    
    // Let's manually construct a case for Energy (6P, 6S).
    // Sum = 30.
    // Let's say all Primary = 2 (Sum=12)
    // All Secondary = 2 (Flipped=3. Sum=18)
    // Total = 30. 30/12 = 2.5.
    const answers: Record<number, number> = {};
    SCORING_CONFIG.energy.primary.forEach(id => answers[id] = 2);
    SCORING_CONFIG.energy.secondary.forEach(id => answers[id] = 2);
    
    const result = calculateScore(answers);
    expect(result.energy.score).toBe(2.5);
    expect(result.energy.trait).toBe('S'); // <= 2.5 is Secondary
  });

  it('should handle scores just above threshold (2.58... -> Primary)', () => {
    // Sum = 31. 31/12 = 2.5833...
    // Change one Primary from 2 to 3. (SumP becomes 13).
    // Total = 13 + 18 = 31.
    const answers: Record<number, number> = {};
    SCORING_CONFIG.energy.primary.forEach(id => answers[id] = 2);
    SCORING_CONFIG.energy.secondary.forEach(id => answers[id] = 2);
    // Bump one primary
    answers[SCORING_CONFIG.energy.primary[0]] = 3;
    
    const result = calculateScore(answers);
    expect(result.energy.score).toBeCloseTo(2.58, 2);
    expect(result.energy.trait).toBe('V'); // > 2.5 is Primary
  });

  it('should generate a full persona code', () => {
    // V K H G -> All Primary Max
    const answers: Record<number, number> = {};
    // Energy: V (4, 1) -> Score 4
    SCORING_CONFIG.energy.primary.forEach(id => answers[id] = 4);
    SCORING_CONFIG.energy.secondary.forEach(id => answers[id] = 1);
    
    // Interaction: K (4, 1) -> Score 4
    SCORING_CONFIG.interaction.primary.forEach(id => answers[id] = 4);
    SCORING_CONFIG.interaction.secondary.forEach(id => answers[id] = 1);
    
    // Relationship: H (4, 1) -> Score 4
    SCORING_CONFIG.relationship.primary.forEach(id => answers[id] = 4);
    SCORING_CONFIG.relationship.secondary.forEach(id => answers[id] = 1);
    
    // Battleground: G (4, 1) -> Score 4
    SCORING_CONFIG.battleground.primary.forEach(id => answers[id] = 4);
    SCORING_CONFIG.battleground.secondary.forEach(id => answers[id] = 1);
    
    const result = calculateScore(answers);
    expect(result.personaCode).toBe('VKHG');
  });

  it('should generate a full persona code for Secondary', () => {
    // S R T C -> All Secondary Max (Primary=1, Secondary=4)
    const answers: Record<number, number> = {};
    const dims = Object.keys(SCORING_CONFIG);
    
    dims.forEach(dim => {
      const config = SCORING_CONFIG[dim as keyof typeof SCORING_CONFIG];
      config.primary.forEach(id => answers[id] = 1);
      config.secondary.forEach(id => answers[id] = 4);
    });
    
    const result = calculateScore(answers);
    expect(result.personaCode).toBe('SRTC');
  });
});
