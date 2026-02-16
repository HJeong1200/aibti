import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function QuizPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(10);
  
  // Mock handler for answering
  const handleAnswer = () => {
    if (progress < 100) {
      setProgress(prev => prev + 10);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
         <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-wider">
            <span>{t('common.progress')}</span>
            <span>{progress}%</span>
         </div>
         <Progress value={progress} className="h-2" />
      </div>

      <Card className="border-2 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl leading-relaxed text-center">
             {t('quiz.q1')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
             {/* Options would go here. For UI demo we hardcode buttons */}
             <Button 
                variant="outline" 
                className="w-full text-left justify-start h-auto py-6 px-6 text-base whitespace-normal leading-relaxed hover:border-primary hover:bg-primary/5 transition-all group"
                onClick={handleAnswer}
             >
                <div className="font-bold mr-3 text-lg text-muted-foreground group-hover:text-primary transition-colors">A.</div>
                <span>{t('quiz.q1_a')}</span>
             </Button>
             
             <Button 
                variant="outline" 
                className="w-full text-left justify-start h-auto py-6 px-6 text-base whitespace-normal leading-relaxed hover:border-primary hover:bg-primary/5 transition-all group"
                onClick={handleAnswer}
             >
                <div className="font-bold mr-3 text-lg text-muted-foreground group-hover:text-primary transition-colors">B.</div>
                <span>{t('quiz.q1_b')}</span>
             </Button>
        </CardContent>
        <CardFooter className="justify-center text-xs text-muted-foreground">
           {t('common.question_progress', { current: 1, total: 12 })}
        </CardFooter>
      </Card>
    </div>
  );
}
