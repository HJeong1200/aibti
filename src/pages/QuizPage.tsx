import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
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
            <span>Progress</span>
            <span>{progress}%</span>
         </div>
         <Progress value={progress} className="h-2" />
      </div>

      <Card className="border-2 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl leading-relaxed text-center">
             When you encounter a new error stack trace, what is your first instinct?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
             {/* Options would go here. For UI demo we hardcode buttons */}
             <Button 
                variant="outline" 
                className="w-full text-left justify-start h-auto py-4 px-6 text-base hover:border-primary hover:bg-primary/5 transition-all"
                onClick={handleAnswer}
             >
                <div className="font-semibold mr-2">A.</div>
                Copy and paste it directly into ChatGPT/Claude.
             </Button>
             
             <Button 
                variant="outline" 
                className="w-full text-left justify-start h-auto py-4 px-6 text-base hover:border-primary hover:bg-primary/5 transition-all"
                onClick={handleAnswer}
             >
                <div className="font-semibold mr-2">B.</div>
                Read the error message and check the specific line of code first.
             </Button>
        </CardContent>
        <CardFooter className="justify-center text-xs text-muted-foreground">
           Question 1 of 12
        </CardFooter>
      </Card>
    </div>
  );
}
