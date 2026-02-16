import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Share2, RefreshCw } from "lucide-react";

export default function ResultPage() {
  return (
    <div className="space-y-8 animate-in zoom-in duration-500 text-center">
      <div className="space-y-2">
        <h2 className="text-xl text-muted-foreground">Your AI Persona is...</h2>
        <h1 className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          The Autopilot Architect
        </h1>
      </div>

      <Card className="border-2 shadow-xl overflow-hidden">
         <div className="h-2 bg-gradient-to-r from-primary to-accent" />
         <CardHeader>
            <CardTitle>Strategic & Automated</CardTitle>
            <CardDescription>(Conceptual, Automated, Speed, Trusting)</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4 text-left">
            <p>
               You view AI essentially as a junior developer who can handle the grunt work while you focus on the big picture architecture. You aren't afraid to let the AI write large chunks of code, provided it fits your mental model.
            </p>
            <Separator />
            <div className="grid grid-cols-2 gap-4 text-sm">
               <div>
                  <span className="font-semibold">Strength:</span> Rapid prototyping
               </div>
               <div>
                  <span className="font-semibold">Weakness:</span> Might miss edge cases
               </div>
            </div>
         </CardContent>
      </Card>

      <div className="flex gap-4 justify-center">
         <Button variant="outline" className="gap-2" asChild>
            <Link to="/test">
               <RefreshCw size={16} />
               Retake Test
            </Link>
         </Button>
         <Button className="gap-2 shadow-md">
            <Share2 size={16} />
            Share Result
         </Button>
      </div>
    </div>
  );
}
