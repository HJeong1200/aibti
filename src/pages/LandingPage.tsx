import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-500 text-balance w-full max-w-2xl">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          <Trans i18nKey="landing.hero_title">
            What is your <span className="text-primary">AI Persona</span>?
          </Trans>
        </h1>
        <p className="text-xl text-muted-foreground">
          {t('landing.hero_desc')}
        </p>
      </div>
      
      <div className="w-full max-w-xs space-y-4">
        <Button asChild size="lg" className="w-full text-lg font-semibold h-12 shadow-lg hover:shadow-xl transition-all">
          <Link to="/test">{t('common.start_test')}</Link>
        </Button>
      </div>

      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left w-full">
         <Card className="bg-secondary/50 border-border hover:bg-secondary/80 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{t('landing.feature_16types')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t('landing.feature_16types_desc')}</p>
            </CardContent>
         </Card>
         <Card className="bg-secondary/50 border-border hover:bg-secondary/80 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{t('landing.feature_dev')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t('landing.feature_dev_desc')}</p>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
