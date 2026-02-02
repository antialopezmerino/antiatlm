import HeroSection from "@/components/landing/HeroSection";
import WhatIsRinganaSection from "@/components/landing/WhatIsRinganaSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ForWhoSection from "@/components/landing/ForWhoSection";
import AboutMeSection from "@/components/landing/AboutMeSection";
import CTASection from "@/components/landing/CTASection";
import DisclaimerSection from "@/components/landing/DisclaimerSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatIsRinganaSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ForWhoSection />
      <AboutMeSection />
      <CTASection />
      <DisclaimerSection />
    </main>
  );
};

export default Index;
