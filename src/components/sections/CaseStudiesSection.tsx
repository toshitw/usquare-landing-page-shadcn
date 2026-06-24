import Image from "next/image";

import { caseStudies } from "@/src/content/landing-page";
import { SectionContainer } from "@/src/components/layout/SectionContainer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CaseStudiesSection() {
  return (
    <SectionContainer
      id="case-studies"
      label={caseStudies.label}
      title={caseStudies.headline}
      description={caseStudies.subheadline}
      className="bg-muted/40"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.items.map((item) => (
          <Card
            key={item.title}
            className="h-full overflow-hidden border-slate-200 bg-white shadow-sm"
          >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                style={{ objectPosition: item.imagePosition ?? "center" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent"
              />
            </div>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg leading-6">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
