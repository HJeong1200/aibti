import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Share2, RefreshCw, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation, Navigate } from "react-router-dom";
import { calculateScore, PersonalityResult } from "@/utils/scoring";
import { useMemo, useState } from "react";

export default function ResultPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const answers = location.state?.answers as Record<number, number> | undefined;
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const result: PersonalityResult | null = useMemo(() => {
    if (!answers) return null;
    return calculateScore(answers);
  }, [answers]);

  if (!answers) {
    return <Navigate to="/test" replace />;
  }

  return (
    <div className="space-y-8 animate-in zoom-in duration-500 text-center">
      <div className="space-y-4">
        <h2 className="text-xl text-muted-foreground">{t('result.your_persona')}</h2>
        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight py-1">
          {result ? t(`result.${result.personaCode}.title`) : t('result.type_name')}
        </h1>
        {result && (
          <p className="text-lg md:text-xl font-medium text-foreground/80 italic">
            "{t(`result.${result.personaCode}.quote`)}"
          </p>
        )}
      </div>

      <Card className="border-2 shadow-xl overflow-hidden mt-8">
         <div className="h-2 bg-gradient-to-r from-primary to-accent" />
         <CardHeader>
            <CardTitle>{result ? t(`result.${result.personaCode}.title`) : t('result.type_name')}</CardTitle>
            <CardDescription>{t('result.analysis')}</CardDescription>
         </CardHeader>
         <CardContent className="space-y-6 text-left">
            {result && (
               <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {t(`result.${result.personaCode}.desc`)}
               </p>
            )}
            <div className="grid gap-4">
                {result && Object.entries(result).filter(([key]) => key !== 'personaCode').map(([key, value]: [string, any]) => (
                    <div key={key} className="flex justify-between items-center bg-secondary/20 p-3 rounded-lg">
                        <span className="capitalize font-medium">{key}</span>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">{value.score.toFixed(2)}</span>
                            <span className="font-bold text-primary">{value.trait}</span>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-center text-muted-foreground mt-4">
               {t('result.analysis')}
            </p>
         </CardContent>
      </Card>

      <div className="flex flex-col items-center gap-4 mt-8">
         <p className="text-sm text-muted-foreground animate-pulse">
            {t('common.save_screenshot')}
         </p>
         <div className="flex gap-4 justify-center w-full">
            <Button variant="outline" className="gap-2 min-w-[140px]" asChild>
               <Link to="/test">
                  <RefreshCw size={16} />
                  {t('common.retake_test')}
               </Link>
            </Button>
            <Button 
               className="gap-2 min-w-[140px] shadow-md transition-all duration-300"
               onClick={handleShare}
            >
               {isCopied ? <Check size={16} /> : <Share2 size={16} />}
               {isCopied ? t('common.copied', { defaultValue: 'Copied!' }) : t('common.share_aibti')}
            </Button>
         </div>
      </div>
    </div>
  );
}
