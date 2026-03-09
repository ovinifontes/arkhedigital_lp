"use client";

import { Bot, User } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";

const AGENT_POINTS = [
  "Atende 24/7",
  "Responde imediatamente",
  "Não se cansa",
  "Não esquece etapas",
  "Mantém padrão no atendimento",
  "Atendimento simultâneo ilimitado",
  "Reduz tarefas manuais",
  "Organiza melhor o processo",
];

const HUMAN_LIMITS = [
  "Depende de horário",
  "Pode demorar",
  "Sofre com acúmulo",
  "Pode esquecer follow-up",
  "Tem limite de escala",
  "Aumenta custo conforme cresce a operação",
  "Dificuldade no atendimento simultâneo",
  "Se cansa e pode esquecer ou cair qualidade",
];

export function CompareSection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionTitle
            title="Agente de IA não substitui valor humano. Ele elimina gargalos."
            subtitle="O objetivo não é apagar o fator humano do negócio, e sim resolver tarefas repetitivas e aumentar a capacidade de resposta."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ScrollReveal direction="left">
            <div className="p-8 rounded-2xl bg-[#0272D3]/15 border-2 border-[#32C5EF]/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#32C5EF]/30 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-[#32C5EF]" />
                </div>
                <h3 className="text-xl font-bold text-[#EAF7FC]">
                  Agente de IA
                </h3>
              </div>
              <ul className="space-y-3">
                {AGENT_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-[#EAF7FC]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#32C5EF]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="p-8 rounded-2xl bg-[#0C4488]/10 border border-[#0C4488]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0272D3]/30 flex items-center justify-center">
                  <User className="w-6 h-6 text-[#0272D3]" />
                </div>
                <h3 className="text-xl font-bold text-[#EAF7FC]">
                  Limitações do atendimento humano
                </h3>
              </div>
              <ul className="space-y-3">
                {HUMAN_LIMITS.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-[#9CA3AF]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0272D3]/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="text-center text-lg text-[#32C5EF] font-medium max-w-2xl mx-auto mt-12">
            O melhor cenário não é IA ou humano. É IA cuidando do operacional e
            humano focando no que realmente exige visão, relacionamento e
            decisão.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
