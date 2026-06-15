import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { CTASection } from "@/src/components/sections/CTASection";
import { CapabilitiesSection } from "@/src/components/sections/CapabilitiesSection";
import { CaseStudiesSection } from "@/src/components/sections/CaseStudiesSection";
import { HeroSection } from "@/src/components/sections/HeroSection";
import { IndustriesSection } from "@/src/components/sections/IndustriesSection";
import { MethodologySection } from "@/src/components/sections/MethodologySection";
import { NextPlatformSection } from "@/src/components/sections/NextPlatformSection";
import { ProofSection } from "@/src/components/sections/ProofSection";
import { ServicesSection } from "@/src/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProofSection />
        <ServicesSection />
        <NextPlatformSection />
        <MethodologySection />
        <CaseStudiesSection />
        <IndustriesSection />
        <CapabilitiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
