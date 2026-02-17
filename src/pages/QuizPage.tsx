import { useQuiz } from "@/hooks/useQuiz";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { QuestionCard } from "@/components/quiz/QuestionCard";

export default function QuizPage() {
  const { 
    currentQuestion, 
    currentQuestionIndex, 
    totalQuestions, 
    progress, 
    submitAnswer 
  } = useQuiz();

  if (!currentQuestion) return null; // Safety check

  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <QuizProgress progress={progress} />
      <QuestionCard 
        question={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        onAnswer={submitAnswer}
      />
    </div>
  );
}
