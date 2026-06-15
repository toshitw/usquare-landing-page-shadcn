import { methodology } from "@/src/content/landing-page";
import { SectionContainer } from "@/src/components/layout/SectionContainer";

export function MethodologySection() {
  return (
    <SectionContainer
      id="methodology"
      label={methodology.label}
      title={methodology.headline}
      description={methodology.subheadline}
    >
      <div className="relative grid gap-6 lg:grid-cols-4">
        {methodology.steps.map((step) => (
          <div
            key={step.step}
            className="rounded-xl border bg-card p-6 shadow-sm"
          >
            <p className="flex size-10 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
              {step.step}
            </p>
            <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
