import Image from "next/image";

import { nextPlatform } from "@/src/content/landing-page";
import { SectionContainer } from "@/src/components/layout/SectionContainer";
import { BorderGlow } from "@/src/components/motion/BorderGlow";

const moduleLogos = [
  "/brand/logo-nextapi.png",
  "/brand/logo-nextflow.png",
  "/brand/logo-nextcluster.png",
  "/brand/logo-nextweb.png",
  "/brand/logo-nextinsight.png",
  "/brand/logo-nextid.png",
];

export function NextPlatformSection() {
  return (
    <SectionContainer
      id="nextplatform"
      label={nextPlatform.label}
      title={nextPlatform.headline}
      description={nextPlatform.subheadline}
      align="left"
      inverse
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(17,183,233,0.16),transparent_30%)]"
      />
      <div className="relative">
        <BorderGlow className="bg-slate-900/80 p-6 lg:p-8 xl:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Image
                src="/brand/nextplatform-logo.svg"
                alt="NEXTPLATFORM"
                width={360}
                height={54}
                className="h-auto w-64 sm:w-72"
                priority={false}
              />
              <p className="mt-7 text-base leading-8 text-slate-300">
                {nextPlatform.body}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {nextPlatform.modules.map((module, index) => (
                <div
                  key={module.title}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-cyan-300/30 hover:bg-white/[0.06]"
                >
                  <div className="mb-4 flex h-10 items-center">
                    <Image
                      src={moduleLogos[index]}
                      alt={`${module.title} logo`}
                      width={194}
                      height={42}
                      className="animated-icon h-auto max-h-8 w-auto max-w-40 object-contain"
                    />
                  </div>
                  <p className="text-sm leading-6 text-slate-300">
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </BorderGlow>
      </div>
    </SectionContainer>
  );
}
