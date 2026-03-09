"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-[#0272D3]/20 to-[#0C4488]/30 border-2 border-[#32C5EF]/40">
            <h2 className="text-3xl md:text-4xl font-bold text-[#EAF7FC] mb-4">
              Quer entender como isso pode funcionar no seu negócio?
            </h2>
            <p className="text-lg text-[#9CA3AF] mb-8">
              Fale agora com o agente da ArkheDigital no WhatsApp e dê o primeiro
              passo para melhorar seu atendimento, organizar seu comercial e
              criar uma estrutura mais eficiente para crescer.
            </p>
            <WhatsAppButton variant="primary" />
            <p className="mt-6 text-[#32C5EF] font-medium">{WHATSAPP_NUMBER}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
