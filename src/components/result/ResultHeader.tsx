import { CardHeader, CardTitle } from "@/components/ui/card";
import { PersonalityResult } from "@/types";
import { useTranslation } from "react-i18next";

interface ResultHeaderProps {
  result: PersonalityResult | null;
}

export const ResultHeader = ({ result }: ResultHeaderProps) => {
  const { t } = useTranslation();

  return (
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
      <CardHeader className="sr-only"> {/* Hidden but accessible if needed, or just part of the layout flow */}
         <CardTitle>{result ? t(`result.${result.personaCode}.title`) : t('result.type_name')}</CardTitle>
      </CardHeader>
    </div>
  );
};
