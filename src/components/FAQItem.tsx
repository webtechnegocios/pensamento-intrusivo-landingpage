import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQItem = ({ question, answer, value }: FAQItemProps) => {
  return (
    <AccordionItem value={value} className="border border-border rounded-lg px-6 mb-4 shadow-soft">
      <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};
