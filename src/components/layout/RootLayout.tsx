import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <header className="w-full max-w-4xl px-6 py-4 flex justify-between items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          AI-BTI
        </h1>
        {/* Placeholder for future nav or theme toggle */}
      </header>
      
      <main className="w-full max-w-lg px-6 py-8 flex-1 flex flex-col justify-center">
        <Outlet />
      </main>
      
      <footer className="w-full py-6 text-center text-sm text-muted-foreground border-t border-border/40 mt-auto">
        <p>© {new Date().getFullYear()} AI-BTI. All rights reserved.</p>
      </footer>
    </div>
  );
}
