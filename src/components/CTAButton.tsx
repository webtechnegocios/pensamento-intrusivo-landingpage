import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  subtitle?: string;
  onClick?: () => void;
}

export const CTAButton = ({ children, subtitle, onClick }: CTAButtonProps) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <Button
        onClick={onClick}
        size="lg"
        className="w-full max-w-2xl h-auto py-6 px-8 text-lg font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-elevated transition-smooth hover:scale-[1.02] active:scale-[0.98]"
      >
        <span className="flex items-center gap-2 text-center w-full justify-center">
          {children}
          <ArrowRight className="h-5 w-5 flex-shrink-0" />
        </span>
      </Button>
      {subtitle && (
        <p className="text-sm text-muted-foreground animate-fade-in">
          {subtitle}
        </p>
      )}
    </div>
  );
};
