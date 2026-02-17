import { PersonalityResult } from "@/types";

interface ResultRadarChartProps {
  result: PersonalityResult;
}

export const ResultRadarChart = ({ result }: ResultRadarChartProps) => {
  return (
    <div className="grid gap-4">
      {Object.entries(result).filter(([key]) => key !== 'personaCode').map(([key, value]: [string, any]) => (
        <div key={key} className="flex justify-between items-center p-3 rounded-lg border">
          <span className="capitalize font-medium">{key}</span>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{value.score.toFixed(2)}</span>
            <span className="font-bold text-primary">{value.trait}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
