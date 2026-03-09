import { HeroSection } from "@/components/sections/HeroSection";
import { InstitutionalSection } from "@/components/sections/InstitutionalSection";
import { PainsSection } from "@/components/sections/PainsSection";
import { AgentsSection } from "@/components/sections/AgentsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CompareSection } from "@/components/sections/CompareSection";
import { AgentTypesSection } from "@/components/sections/AgentTypesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TargetSection } from "@/components/sections/TargetSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { CEOSection } from "@/components/sections/CEOSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InstitutionalSection />
        <PainsSection />
        <AgentsSection />
        <BenefitsSection />
        <CompareSection />
        <AgentTypesSection />
        <ServicesSection />
        <ProcessSection />
        <TargetSection />
        <DifferentialsSection />
        <CEOSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
      <WhatsAppButton variant="floating" />
    </>
  );
}
