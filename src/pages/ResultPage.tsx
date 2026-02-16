import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Navigate } from "react-router-dom";
import { Share2, RefreshCw, Check, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useQuizResult } from "@/hooks/useQuizResult";

export default function ResultPage() {
  const { t } = useTranslation();
  const {
    result,
    answers,
    isCopied,
    showDetails,
    handleShare,
    toggleDetails
  } = useQuizResult();

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

            {/* Detailed Analysis Section */}
            <div className="mt-8">
               <Button 
                  variant="ghost" 
                  onClick={toggleDetails}
                  className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground mb-4"
               >
                  {showDetails ? (
                     <>
                        {t('dimensions.show_less')} <ChevronUp size={16} />
                     </>
                  ) : (
                     <>
                        {t('dimensions.show_more')} <ChevronDown size={16} />
                     </>
                  )}
               </Button>

               {showDetails && result && (
                  <div className="space-y-6 animate-in slide-in-from-top-4 fade-in duration-300">
                     {/* Dimension 1: Energy */}
                     <div className="bg-secondary/10 p-4 rounded-lg space-y-2 text-left">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                           {t('dimensions.energy.title')}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{t('dimensions.energy.desc')}</p>
                        <div className="pl-4 border-l-2 border-primary/30">
                           <p className="font-semibold text-primary">
                              {t(`dimensions.energy.${result.energy.trait}.title`)}
                           </p>
                           <p className="text-sm mt-1">
                              <span className="font-medium">Philosophy:</span> {t(`dimensions.energy.${result.energy.trait}.philosophy`)}
                           </p>
                           <p className="text-sm mt-1">
                              <span className="font-medium">Strengths:</span> {t(`dimensions.energy.${result.energy.trait}.strengths`)}
                           </p>
                           <p className="text-sm mt-1 text-red-400/80">
                              <span className="font-medium">Pitfall:</span> {t(`dimensions.energy.${result.energy.trait}.pitfall`)}
                           </p>
                        </div>
                     </div>

                     {/* Dimension 2: Interaction */}
                     <div className="bg-secondary/10 p-4 rounded-lg space-y-2 text-left">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                           {t('dimensions.interaction.title')}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{t('dimensions.interaction.desc')}</p>
                        <div className="pl-4 border-l-2 border-primary/30">
                           <p className="font-semibold text-primary">
                              {t(`dimensions.interaction.${result.interaction.trait}.title`)}
                           </p>
                           <p className="text-sm mt-1">
                              <span className="font-medium">Philosophy:</span> {t(`dimensions.interaction.${result.interaction.trait}.philosophy`)}
                           </p>
                           <p className="text-sm mt-1">
                              <span className="font-medium">Strengths:</span> {t(`dimensions.interaction.${result.interaction.trait}.strengths`)}
                           </p>
                           <p className="text-sm mt-1 text-red-400/80">
                              <span className="font-medium">Pitfall:</span> {t(`dimensions.interaction.${result.interaction.trait}.pitfall`)}
                           </p>
                        </div>
                     </div>

                     {/* Dimension 3: Relationship */}
                     <div className="bg-secondary/10 p-4 rounded-lg space-y-2 text-left">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                           {t('dimensions.relationship.title')}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{t('dimensions.relationship.desc')}</p>
                        <div className="pl-4 border-l-2 border-primary/30">
                           <p className="font-semibold text-primary">
                              {t(`dimensions.relationship.${result.relationship.trait}.title`)}
                           </p>
                           <p className="text-sm mt-1">
                              <span className="font-medium">Philosophy:</span> {t(`dimensions.relationship.${result.relationship.trait}.philosophy`)}
                           </p>
                           <p className="text-sm mt-1">
                              <span className="font-medium">Strengths:</span> {t(`dimensions.relationship.${result.relationship.trait}.strengths`)}
                           </p>
                           <p className="text-sm mt-1 text-red-400/80">
                              <span className="font-medium">Pitfall:</span> {t(`dimensions.relationship.${result.relationship.trait}.pitfall`)}
                           </p>
                        </div>
                     </div>

                     {/* Dimension 4: Battleground */}
                     <div className="bg-secondary/10 p-4 rounded-lg space-y-2 text-left">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                           {t('dimensions.battleground.title')}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{t('dimensions.battleground.desc')}</p>
                        <div className="pl-4 border-l-2 border-primary/30">
                           <p className="font-semibold text-primary">
                              {t(`dimensions.battleground.${result.battleground.trait}.title`)}
                           </p>
                           <p className="text-sm mt-1">
                              <span className="font-medium">Philosophy:</span> {t(`dimensions.battleground.${result.battleground.trait}.philosophy`)}
                           </p>
                           <p className="text-sm mt-1">
                              <span className="font-medium">Strengths:</span> {t(`dimensions.battleground.${result.battleground.trait}.strengths`)}
                           </p>
                           <p className="text-sm mt-1 text-red-400/80">
                              <span className="font-medium">Pitfall:</span> {t(`dimensions.battleground.${result.battleground.trait}.pitfall`)}
                           </p>
                        </div>
                     </div>
                  </div>
               )}
            </div>
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
