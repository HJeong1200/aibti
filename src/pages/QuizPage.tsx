import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { questions } from "@/data/questions";

// Fisher-Yates shuffle
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function QuizPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  // Shuffle questions once on mount
  const shuffledQuestions = useMemo(() => shuffleArray(questions), []);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const totalQuestions = shuffledQuestions.length;
  
  const progress = ((currentQuestionIndex) / totalQuestions) * 100;

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Finished
      console.log('Answers:', newAnswers);
      navigate("/result");
    }
  };

  const options = [
    { label: t('quiz.likert.strongly_agree'), value: 4, colorClass: "hover:border-primary hover:bg-primary/10" },
    { label: t('quiz.likert.agree'), value: 3, colorClass: "hover:border-primary/70 hover:bg-primary/5" },
    { label: t('quiz.likert.disagree'), value: 2, colorClass: "hover:border-destructive/70 hover:bg-destructive/5" },
    { label: t('quiz.likert.strongly_disagree'), value: 1, colorClass: "hover:border-destructive hover:bg-destructive/10" },
  ];

  if (!currentQuestion) return null; // Safety check

  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
         <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-wider">
            <span>{t('common.progress')}</span>
            <span>{Math.round(progress)}%</span>
         </div>
         <Progress value={progress} className="h-2" />
      </div>

      <Card className="border-2 shadow-lg min-h-[400px] flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl leading-relaxed text-center">
             {i18n.language === 'ko' ? currentQuestion.text.ko : currentQuestion.text.en}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 pt-4">
             {options.map((option) => (
               <Button 
                  key={option.value}
                  variant="outline" 
                  className={`w-full text-left justify-start h-auto py-4 px-6 text-base whitespace-normal leading-relaxed transition-all group ${option.colorClass}`}
                  onClick={() => handleAnswer(option.value)}
               >
                  <span className="font-medium group-hover:font-semibold transition-all">{option.label}</span>
               </Button>
             ))}
        </CardContent>
        <CardFooter className="justify-center text-xs text-muted-foreground pb-6">
           {t('common.question_progress', { current: currentQuestionIndex + 1, total: totalQuestions })}
        </CardFooter>
      </Card>
    </div>
  );
}
