import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "@/data/questions";
import { Question } from "@/types";

// Fisher-Yates shuffle
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const useQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  // Shuffle questions once on mount
  const shuffledQuestions = useMemo(() => shuffleArray(questions), []);

  const currentQuestion: Question | undefined = shuffledQuestions[currentQuestionIndex];
  const totalQuestions = shuffledQuestions.length;
  
  const progress = ((currentQuestionIndex) / totalQuestions) * 100;

  const submitAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Finished
      const answersMap: Record<number, number> = {};
      newAnswers.forEach((s, index) => {
        const questionId = shuffledQuestions[index].id;
        answersMap[questionId] = s;
      });
      navigate("/result", { state: { answers: answersMap } });
    }
  };

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    submitAnswer,
  };
};
