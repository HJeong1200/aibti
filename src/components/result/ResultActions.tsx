import { Button } from "@/components/ui/button";
import { Check, RefreshCw, Share2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ResultActionsProps {
  onShare: () => void;
  isCopied: boolean;
}

export const ResultActions = ({ onShare, isCopied }: ResultActionsProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
       <p className="text-sm text-muted-foreground animate-pulse">
          {t('common.save_screenshot')}
       </p>
       <div className="flex gap-4 justify-center w-full">
          <Button variant="outline" className="gap-2 min-w-[140px] hover:bg-transparent" asChild>
             <Link to="/test">
                <RefreshCw size={16} />
                {t('common.retake_test')}
             </Link>
          </Button>
          <Button 
             variant="default"
             className="gap-2 min-w-[140px]"
             onClick={onShare}
          >
             {isCopied ? <Check size={16} /> : <Share2 size={16} />}
             {isCopied ? t('common.copied', { defaultValue: 'Copied!' }) : t('common.share_aibti')}
          </Button>
       </div>
    </div>
  );
};
