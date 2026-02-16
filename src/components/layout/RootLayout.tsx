import { Outlet } from "react-router-dom";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useTranslation } from "react-i18next";

export default function RootLayout() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <header className="w-full max-w-4xl px-6 py-4 flex justify-between items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t('common.title')}
        </h1>
        <LanguageToggle />
      </header>
      
      <main className="w-full max-w-lg px-6 py-8 flex-1 flex flex-col justify-center">
        <Outlet />
      </main>
      
      <footer className="w-full py-6 text-center text-sm text-muted-foreground border-t border-border/40 mt-auto">
        <p>{t('common.footer', { year: new Date().getFullYear() })}</p>
      </footer>
    </div>
  );
}
