import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Question } from "@/types";
import { useTranslation } from "react-i18next";

interface QuestionCardProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswer: (score: number) => void;
}

export const QuestionCard = ({ 
  question, 
  currentQuestionIndex, 
  totalQuestions, 
  onAnswer 
}: QuestionCardProps) => {
  const { t, i18n } = useTranslation();

  const options = [
    { label: t('quiz.likert.strongly_agree'), value: 4, colorClass: "[@media(hover:hover)]:hover:border-primary [@media(hover:hover)]:hover:text-primary" },
    { label: t('quiz.likert.agree'), value: 3, colorClass: "[@media(hover:hover)]:hover:border-primary/70 [@media(hover:hover)]:hover:text-primary/70" },
    { label: t('quiz.likert.disagree'), value: 2, colorClass: "border-destructive/40 text-destructive/80 [@media(hover:hover)]:hover:border-destructive [@media(hover:hover)]:hover:text-destructive" },
    { label: t('quiz.likert.strongly_disagree'), value: 1, colorClass: "border-destructive/60 text-destructive [@media(hover:hover)]:hover:border-destructive" },
  ];

  return (
    <Card className="border-2 shadow-lg min-h-[400px] flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl leading-relaxed text-center">
           {i18n.language === 'ko' ? question.text.ko : question.text.en}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-4">
           {options.map((option) => (
             <Button 
                key={option.value}
                className={`w-full text-left justify-start h-auto py-4 px-6 text-base whitespace-normal leading-relaxed transition-all group border shadow-sm hover:shadow-md hover:bg-transparent ${option.colorClass}`}
                variant="outline"
                onClick={() => onAnswer(option.value)}
             >
                <span className="font-medium [@media(hover:hover)]:group-hover:font-semibold transition-all">{option.label}</span>
             </Button>
           ))}
      </CardContent>
      <CardFooter className="justify-center text-xs text-muted-foreground pb-6">
         {t('common.question_progress', { current: currentQuestionIndex + 1, total: totalQuestions })}
      </CardFooter>
    </Card>
  );
};
