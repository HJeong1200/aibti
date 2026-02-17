import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useQuizResult } from "@/hooks/useQuizResult";
import { ResultHeader } from "@/components/result/ResultHeader";
import { ResultRadarChart } from "@/components/result/ResultRadarChart";
import { DetailedAnalysis } from "@/components/result/DetailedAnalysis";
import { ResultActions } from "@/components/result/ResultActions";

export default function ResultPage() {
  const { t } = useTranslation();
  const {
    result,
    answers,
    isCopied,
    handleShare,
  } = useQuizResult();

  if (!answers) {
    return <Navigate to="/test" replace />;
  }

  return (
    <div className="space-y-8 animate-in zoom-in duration-500 text-center">
      <ResultHeader result={result} />

      <Card className="border-2 shadow-xl overflow-hidden mt-8">
         <div className="h-2 bg-gradient-to-r from-primary to-accent" />
         <CardHeader>
            <CardTitle>{result ? t(`result.${result.personaCode}.title`) : t('result.type_name')}</CardTitle>
         </CardHeader>
         <CardContent className="space-y-6 text-left">
            {result && (
               <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {t(`result.${result.personaCode}.desc`)}
               </p>
            )}
            
            {result && <ResultRadarChart result={result} />}

            {result && <DetailedAnalysis result={result} />}
         </CardContent>
      </Card>

      <ResultActions onShare={handleShare} isCopied={isCopied} />
    </div>
  );
}
