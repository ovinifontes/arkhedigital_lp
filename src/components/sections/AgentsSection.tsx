"use client";

import { Bot } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function AgentsSection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionTitle
            title="A solução começa com um Agente de IA"
            subtitle="A porta de entrada para empresas que querem melhorar atendimento e ganhar eficiência"
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0C4488]/30 to-[#0272D3]/20 border border-[#32C5EF]/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#32C5EF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#32C5EF]/20 flex items-center justify-center">
                    <Bot className="w-8 h-8 text-[#32C5EF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#EAF7FC]">
                    Agentes de IA ArkheDigital
                  </h3>
                </div>
                <p className="text-lg text-[#EAF7FC]/90 mb-4 leading-relaxed">
                  Os Agentes de IA da ArkheDigital são a principal porta de
                  entrada para empresas que querem melhorar o atendimento,
                  organizar o comercial e ganhar eficiência sem complicação.
                  Eles ajudam seu negócio a responder mais rápido, atender com
                  mais consistência e reduzir a perda de oportunidades.
                </p>
                <p className="text-[#9CA3AF]">
                  Dependendo do seu caso, o agente pode ser o primeiro passo para
                  uma estrutura maior de automação, CRM, funis, páginas,
                  campanhas e outras melhorias estratégicas.
                </p>
                <div className="mt-8">
                  <WhatsAppButton variant="primary" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
