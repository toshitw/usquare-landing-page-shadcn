import { capabilities } from "@/src/content/landing-page";
import { SectionContainer } from "@/src/components/layout/SectionContainer";

export function CapabilitiesSection() {
  return (
    <SectionContainer
      id="capabilities"
      label={capabilities.label}
      title={capabilities.headline}
      className="bg-muted/40"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {capabilities.groups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border bg-card p-5 shadow-sm"
          >
            <h3 className="text-base font-semibold">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
              {group.items.map((item) => (
                <li key={item} className="border-l border-primary/20 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
