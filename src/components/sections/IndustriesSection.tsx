import {
  BriefcaseBusiness,
  Building2,
  Factory,
  Landmark,
  PackageCheck,
  Plane,
} from "lucide-react";

import { industries } from "@/src/content/landing-page";
import { SectionContainer } from "@/src/components/layout/SectionContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const industryIcons = [
  Landmark,
  Building2,
  Factory,
  PackageCheck,
  Plane,
  BriefcaseBusiness,
];

export function IndustriesSection() {
  return (
    <SectionContainer
      id="industries"
      label={industries.label}
      title={industries.headline}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {industries.items.map((item, index) => {
          const Icon = industryIcons[index] ?? BriefcaseBusiness;

          return (
          <Card key={item.title} className="h-full border-slate-200 shadow-sm">
            <CardHeader>
                <div className="mb-4 flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="animated-icon size-5" />
                </div>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">
              {item.description}
            </CardContent>
          </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
}
