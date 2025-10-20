import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface ModuleCardProps {
  number: number;
  title: string;
  subtitle: string;
  features: string[];
}

export const ModuleCard = ({ number, title, subtitle, features }: ModuleCardProps) => {
  return (
    <Card className="shadow-soft hover:shadow-elevated transition-smooth animate-slide-up">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-calm text-primary-foreground font-bold text-lg">
            {number}
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl mb-1">{title}</CardTitle>
            <p className="text-sm text-muted-foreground font-normal">{subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
