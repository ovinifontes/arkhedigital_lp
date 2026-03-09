"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { AGENT_TYPES } from "@/lib/constants";

export function AgentTypesSection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionTitle
            title="Tipos de Agentes de IA que a ArkheDigital pode implementar"
            subtitle="Soluções sob medida para cada necessidade do seu negócio"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENT_TYPES.map((agent, i) => (
            <ScrollReveal key={agent.name} delay={i * 0.08}>
              <div className="group h-full p-6 rounded-2xl bg-[#0C4488]/10 border border-[#0272D3]/20 hover:border-[#32C5EF]/40 hover:bg-[#0C4488]/20 transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-lg font-bold text-[#32C5EF] mb-2">
                  {agent.name}
                </h4>
                <p className="text-[#EAF7FC]/80 text-sm mb-4">
                  {agent.description}
                </p>
                <p className="text-[#9CA3AF] text-sm font-medium">
                  ✓ {agent.benefit}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
