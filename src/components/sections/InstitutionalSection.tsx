"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export function InstitutionalSection() {
  return (
    <section id="resumo" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-[#EAF7FC]/90 leading-relaxed">
              A <span className="text-[#32C5EF] font-semibold">ArkheDigital</span>{" "}
              é uma empresa de soluções digitais que ajuda negócios a vender
              mais, atender melhor e ganhar eficiência com tecnologia.
              Trabalhamos com agentes de IA, automações, sites, landing pages,
              CRM e estruturas digitais pensadas para gerar resultado real.
              Nosso foco é simplificar processos, melhorar o atendimento e criar
              soluções sob medida para cada negócio.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
