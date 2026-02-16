import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-500 text-balance">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          What is your <span className="text-primary">AI Persona</span>?
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover how you interact with AI tools. Are you a prompt engineer, a code verifyer, or an automation wizard?
        </p>
      </div>
      
      <div className="w-full max-w-xs space-y-4">
        <Button asChild size="lg" className="w-full text-lg font-semibold h-12 shadow-lg hover:shadow-xl transition-all">
          <Link to="/test">Start Test</Link>
        </Button>
      </div>

      <div className="pt-8 grid grid-cols-2 gap-4 text-left w-full">
         <div className="p-4 rounded-lg bg-secondary/50 border border-border">
            <h3 className="font-semibold mb-1">16 Types</h3>
            <p className="text-xs text-muted-foreground">Detailed analysis of your AI habits.</p>
         </div>
         <div className="p-4 rounded-lg bg-secondary/50 border border-border">
            <h3 className="font-semibold mb-1">Developer Focused</h3>
            <p className="text-xs text-muted-foreground">Tailored for modern coding workflows.</p>
         </div>
      </div>
    </div>
  );
}
