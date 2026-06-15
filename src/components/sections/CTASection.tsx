import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cta } from "@/src/content/landing-page";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(17,183,233,0.18),transparent_35%)]"
      />
      <div className="container">
        <div className="relative mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center shadow-2xl shadow-cyan-950/20 sm:p-12">
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {cta.headline}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            {cta.subheadline}
          </p>
          <p className="mt-4 text-base leading-7 text-slate-400">
            {cta.supportingText}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href={cta.primaryCta.href}>
                {cta.primaryCta.label}
                <ArrowRight className="animated-icon size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={cta.secondaryCta.href}>{cta.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
