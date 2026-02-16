import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { calculateScore } from "@/utils/scoring";
import { PersonalityResult } from "@/types";

export const useQuizResult = () => {
  const location = useLocation();
  const answers = location.state?.answers as Record<number, number> | undefined;
  const [isCopied, setIsCopied] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const result: PersonalityResult | null = useMemo(() => {
    if (!answers) return null;
    return calculateScore(answers);
  }, [answers]);

  const handleShare = async () => {
    try {
      const url = `${window.location.origin}${import.meta.env.BASE_URL}`;
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const toggleDetails = () => setShowDetails(prev => !prev);

  return {
    result,
    answers,
    isCopied,
    showDetails,
    handleShare,
    toggleDetails
  };
};
