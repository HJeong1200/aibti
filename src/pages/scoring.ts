import { PersonalityResult } from "@/types";

export const SCORING_CONFIG = {
  // Dimension 1: Energy (Vibe vs Spec)
  // Range: 1-12
  energy: {
    primary: [1, 3, 4, 7, 9, 11], // Vibe
    secondary: [2, 5, 6, 8, 10, 12], // Spec
  },
  // Dimension 2: Interaction (One-Shot vs Refiner)
  // Range: 13-24
  interaction: {
    primary: [13, 15, 17, 21, 23], // One-Shot (1,3,5,9,11 + 12)
    secondary: [14, 16, 18, 19, 20, 22, 24], // Refiner (2,4,6,7,8,10,12 + 12)
  },
  // Dimension 3: Relationship (Humanist vs Taskmaster)
  // Range: 25-36
  relationship: {
    primary: [25, 27, 29, 31, 33, 34, 36], // Humanist (1,3,5,7,9,10,12 + 24)
    secondary: [26, 28, 30, 32, 35], // Taskmaster (2,4,6,8,11 + 24)
  },
  // Dimension 4: Battleground (GUI vs CLI)
  // Range: 37-48
  battleground: {
    primary: [37, 39, 41, 43, 45, 47], // GUI (1,3,5,7,9,11 + 36)
    secondary: [38, 40, 42, 44, 46, 48], // CLI (2,4,6,8,10,12 + 36)
  }
};


const TRAIT_CODES = {
  energy: { primary: 'V', secondary: 'S' },
  interaction: { primary: 'K', secondary: 'R' },
  relationship: { primary: 'H', secondary: 'T' },
  battleground: { primary: 'G', secondary: 'C' }
};

export function calculateScore(answers: Record<number, number>): PersonalityResult {
  const result: any = {};
  let personaCode = "";

  for (const [dimKey, config] of Object.entries(SCORING_CONFIG)) {
    let sumPrimary = 0;
    let sumSecondary = 0;

    // Calculate Primary Sum (Raw 1-4)
    config.primary.forEach(id => {
      const val = answers[id] || 0; // Default to 0 if missing, though typically all should be answered
      sumPrimary += val;
    });

    // Calculate Secondary Sum (Flipped: 5 - val)
    config.secondary.forEach(id => {
      const val = answers[id] || 0;
      if (val > 0) {
        sumSecondary += (5 - val);
      }
    });

    // Formula: (Sum(Primary) + Sum(5 - Secondary)) / 12
    const totalScore = (sumPrimary + sumSecondary) / 12;
    // Round to 2 decimal places for cleanliness
    const roundedScore = Math.round(totalScore * 100) / 100;

    // Determine Trait (<= 2.5 is Secondary, >= 2.6 is Primary)
    // Note: The prompt says 1.0 - 2.5 is Secondary. 2.6 - 4.0 is Primary.
    // What about 2.55? Let's assume strict <= 2.5 for Secondary.
    // Determine Trait (<= 2.5 is Secondary, >= 2.6 is Primary)
    
    const traitCodes = TRAIT_CODES[dimKey as keyof typeof TRAIT_CODES];
    const trait = roundedScore > 2.5 ? traitCodes.primary : traitCodes.secondary; // > 2.5 means 2.50001+, effectively 2.6+ if steps are large?
    // Wait, let's look at the math. 
    // Max sum = 48. Min sum = 12. 
    // Steps are 1/12 = 0.08333...
    // 2.5 * 12 = 30.
    // If sum is 30, score is 2.5. -> Secondary.
    // If sum is 31, score is 2.5833... -> Rounds to 2.58 -> Primary.
    // So strictly > 2.5 works perfectly.

    result[dimKey] = {
      dimension: dimKey,
      score: roundedScore,
      trait: trait
    };
    
    personaCode += trait;
  }

  result.personaCode = personaCode;
  return result as PersonalityResult;
}
