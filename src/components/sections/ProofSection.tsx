import { CheckCircle2 } from "lucide-react";

import { proof } from "@/src/content/landing-page";
import { SectionContainer } from "@/src/components/layout/SectionContainer";
import { AnimatedCard } from "@/src/components/motion/AnimatedCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProofSection() {
  return (
    <SectionContainer
      id="proof"
      label={proof.label}
      title={proof.headline}
      align="left"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5 text-base leading-8 text-muted-foreground">
        {proof.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

        <div className="grid gap-5 sm:grid-cols-2">
        {proof.cards.map((item) => (
          <AnimatedCard key={item.title}>
              <Card className="h-full border-slate-200/80 bg-white shadow-sm">
              <CardHeader>
                  <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <CheckCircle2 className="animated-icon size-5" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </CardContent>
            </Card>
          </AnimatedCard>
        ))}
        </div>
      </div>
    </SectionContainer>
  );
}
