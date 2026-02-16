export type Question = {
  id: number;
  category: string;
  text: {
    en: string;
    ko: string;
  };
};

export type DimensionScore = {
  dimension: string;
  score: number;
  trait: string; // 'Primary' or 'Secondary' code (e.g. 'V', 'S')
};

export type PersonalityResult = {
  energy: DimensionScore;
  interaction: DimensionScore;
  relationship: DimensionScore;
  battleground: DimensionScore;
  personaCode: string; // e.g., "VKHG"
};
