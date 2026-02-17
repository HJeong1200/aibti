import { Button } from "@/components/ui/button";
import { PersonalityResult } from "@/types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface DetailedAnalysisProps {
  result: PersonalityResult;
}

export const DetailedAnalysis = ({ result }: DetailedAnalysisProps) => {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="mt-8">
      <Button 
        variant="outline" 
        onClick={() => setShowDetails(!showDetails)}
        className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground mb-4 border-dashed hover:bg-transparent"
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

      {showDetails && (
        <div className="space-y-6 animate-in slide-in-from-top-4 fade-in duration-300">
           {/* Dimension 1: Energy */}
           <div className="p-4 rounded-lg space-y-2 text-left border">
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
                 <p className="text-sm mt-1 text-destructive">
                    <span className="font-medium">Pitfall:</span> {t(`dimensions.energy.${result.energy.trait}.pitfall`)}
                 </p>
              </div>
           </div>

           {/* Dimension 2: Interaction */}
           <div className="p-4 rounded-lg space-y-2 text-left border">
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
                 <p className="text-sm mt-1 text-destructive">
                    <span className="font-medium">Pitfall:</span> {t(`dimensions.interaction.${result.interaction.trait}.pitfall`)}
                 </p>
              </div>
           </div>

           {/* Dimension 3: Relationship */}
           <div className="p-4 rounded-lg space-y-2 text-left border">
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
                 <p className="text-sm mt-1 text-destructive">
                    <span className="font-medium">Pitfall:</span> {t(`dimensions.relationship.${result.relationship.trait}.pitfall`)}
                 </p>
              </div>
           </div>

           {/* Dimension 4: Battleground */}
           <div className="p-4 rounded-lg space-y-2 text-left border">
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
                 <p className="text-sm mt-1 text-destructive">
                    <span className="font-medium">Pitfall:</span> {t(`dimensions.battleground.${result.battleground.trait}.pitfall`)}
                 </p>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};
