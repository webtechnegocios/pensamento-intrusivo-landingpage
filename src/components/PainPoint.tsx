import { CheckCircle2 } from "lucide-react";

interface PainPointProps {
  icon: string;
  title: string;
  description: string;
}

export const PainPoint = ({ icon, title, description }: PainPointProps) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border shadow-soft animate-slide-up hover:shadow-elevated transition-smooth">
      <div className="flex-shrink-0 mt-1">
        <CheckCircle2 className="h-6 w-6 text-secondary" />
      </div>
      <div className="flex-1">
        <p className="text-base leading-relaxed">
          <span className="text-2xl mr-2">{icon}</span>
          <strong className="font-bold">{title}:</strong> {description}
        </p>
      </div>
    </div>
  );
};
