import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";

interface QuizProgressProps {
  progress: number;
}

export const QuizProgress = ({ progress }: QuizProgressProps) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-wider">
        <span>{t('common.progress')}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};
