import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react";

interface BonusCardProps {
  number: number;
  title: string;
  value: string;
  description: string;
}

export const BonusCard = ({ number, title, value, description }: BonusCardProps) => {
  return (
    <Card className="shadow-soft hover:shadow-elevated transition-smooth animate-slide-up border-2 border-accent/20">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <Gift className="h-8 w-8 text-accent" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-accent">BÔNUS {number}</p>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </div>
        <p className="text-2xl font-bold text-primary">Valor: {value}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
