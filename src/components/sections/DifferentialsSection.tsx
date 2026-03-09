"use client";

import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { DIFFERENTIALS } from "@/lib/constants";

export function DifferentialsSection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionTitle
            title="Por que escolher a ArkheDigital"
            subtitle="Diferenciais que fazem a diferença no seu resultado"
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {DIFFERENTIALS.map((item, i) => (
            <ScrollReveal key={item} delay={i * 0.05}>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0C4488]/10 border border-[#0272D3]/20">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#32C5EF]/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#32C5EF]" />
                </div>
                <span className="text-[#EAF7FC]">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
