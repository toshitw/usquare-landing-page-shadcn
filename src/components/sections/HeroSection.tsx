import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { hero } from "@/src/content/landing-page";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountUpNumber } from "@/src/components/motion/CountUpNumber";
import { HeroNetworkBackground } from "@/src/components/motion/HeroNetworkBackground";
import { Reveal } from "@/src/components/motion/Reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
      <HeroNetworkBackground />
      <div aria-hidden="true" className="absolute inset-0 bg-slate-950/70" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
      />
      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <Badge className="border-cyan-400/30 bg-cyan-400/10 text-cyan-100 hover:bg-cyan-400/10">
              {hero.eyebrow}
            </Badge>
            <h1 className="mt-7 max-w-3xl text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {hero.subheadline}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              {hero.supportingCopy}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <ArrowRight className="animated-icon size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur"
          >
            <div className="rounded-xl border border-cyan-300/20 bg-slate-900/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                NEXTPLATFORM Delivery Model
              </p>
              <div className="mt-7 space-y-4">
                {hero.deliveryHighlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="animated-icon size-5 text-cyan-300" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {hero.metrics.slice(0, 4).map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-2xl font-semibold text-cyan-100">
                      <CountUpNumber value={metric.value} />
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
