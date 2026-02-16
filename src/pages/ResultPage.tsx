import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Share2, RefreshCw } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ResultPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 animate-in zoom-in duration-500 text-center">
      <div className="space-y-2">
        <h2 className="text-xl text-muted-foreground">{t('result.your_persona')}</h2>
        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t('result.type_name')}
        </h1>
      </div>

      <Card className="border-2 shadow-xl overflow-hidden">
         <div className="h-2 bg-gradient-to-r from-primary to-accent" />
         <CardHeader>
            <CardTitle>{t('result.type_name')}</CardTitle>
            <CardDescription>{t('result.type_desc')}</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4 text-left">
            <p>
               {t('result.analysis')}
            </p>
            <Separator />
            <div className="grid grid-cols-2 gap-4 text-sm">
               <div>
                  {t('result.strength')}
               </div>
               <div>
                  {t('result.weakness')}
               </div>
            </div>
         </CardContent>
      </Card>

      <div className="flex gap-4 justify-center">
         <Button variant="outline" className="gap-2" asChild>
            <Link to="/test">
               <RefreshCw size={16} />
               {t('common.retake_test')}
            </Link>
         </Button>
         <Button className="gap-2 shadow-md">
            <Share2 size={16} />
            {t('common.share_result')}
         </Button>
      </div>
    </div>
  );
}
