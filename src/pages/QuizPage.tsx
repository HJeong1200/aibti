import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";
import { useQuiz } from "@/hooks/useQuiz";

export default function QuizPage() {
  const { t, i18n } = useTranslation();
  const { 
    currentQuestion, 
    currentQuestionIndex, 
    totalQuestions, 
    progress, 
    submitAnswer 
  } = useQuiz();

  const options = [
    { label: t('quiz.likert.strongly_agree'), value: 4, colorClass: "[@media(hover:hover)]:hover:border-primary [@media(hover:hover)]:hover:bg-primary/10" },
    { label: t('quiz.likert.agree'), value: 3, colorClass: "[@media(hover:hover)]:hover:border-primary/70 [@media(hover:hover)]:hover:bg-primary/5" },
    { label: t('quiz.likert.disagree'), value: 2, colorClass: "[@media(hover:hover)]:hover:border-destructive/70 [@media(hover:hover)]:hover:bg-destructive/5" },
    { label: t('quiz.likert.strongly_disagree'), value: 1, colorClass: "[@media(hover:hover)]:hover:border-destructive [@media(hover:hover)]:hover:bg-destructive/10" },
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
                  className={`w-full text-left justify-start h-auto py-4 px-6 text-base whitespace-normal leading-relaxed transition-all group !border-input !bg-background !shadow-sm border !focus:outline-none !focus:ring-0 !focus:ring-offset-0 !focus-visible:ring-0 !focus-visible:ring-offset-0 !focus-visible:bg-background !focus-visible:text-primary !focus:bg-background !focus:text-primary !text-primary ${option.colorClass}`}
                  onClick={() => submitAnswer(option.value)}
               >
                  <span className="font-medium [@media(hover:hover)]:group-hover:font-semibold transition-all">{option.label}</span>
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
