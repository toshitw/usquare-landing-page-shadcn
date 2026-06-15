import {
  Activity,
  BrainCircuit,
  Cable,
  Cloud,
  Code2,
  LockKeyhole,
  Route,
  Workflow,
} from "lucide-react";

import { services } from "@/src/content/landing-page";
import { SectionContainer } from "@/src/components/layout/SectionContainer";
import { AnimatedCard } from "@/src/components/motion/AnimatedCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const serviceIcons = [
  Route,
  Code2,
  Cable,
  BrainCircuit,
  Cloud,
  LockKeyhole,
  Workflow,
  Activity,
];

export function ServicesSection() {
  return (
    <SectionContainer
      id="services"
      label={services.label}
      title={services.headline}
      description={services.subheadline}
      className="bg-white"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.items.map((item, index) => {
          const Icon = serviceIcons[index] ?? Activity;

          return (
          <AnimatedCard key={item.title}>
              <Card className="h-full border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-sm">
              <CardHeader>
                  <div className="mb-4 flex size-11 items-center justify-center rounded-md border bg-white text-primary shadow-sm">
                    <Icon className="animated-icon size-5" />
                  </div>
                  <CardTitle className="text-lg leading-6">
                    {item.title}
                  </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </CardContent>
            </Card>
          </AnimatedCard>
          );
        })}
      </div>
    </SectionContainer>
  );
}
