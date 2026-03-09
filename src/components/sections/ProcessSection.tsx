"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { PROCESS_STEPS } from "@/lib/constants";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function ProcessSection() {
  return (
    <section id="como-funciona" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionTitle
            title="Como funciona o processo"
            subtitle="Do primeiro contato à implementação e evolução contínua"
          />
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-4">
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={step} delay={i * 0.08}>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0C4488]/10 border border-[#0272D3]/20 hover:border-[#32C5EF]/30 transition-colors">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#32C5EF] flex items-center justify-center text-sm font-bold text-[#071A2F]">
                  {i + 1}
                </span>
                <p className="text-[#EAF7FC] font-medium">{step}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <WhatsAppButton variant="primary" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
