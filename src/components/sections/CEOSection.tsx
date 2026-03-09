"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";

export function CEOSection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionTitle
            title="Quem está por trás da ArkheDigital"
            subtitle="Conheça o fundador"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-[#32C5EF]/30 shadow-xl">
                <Image
                  src="/foto_viniciusfontes.webp"
                  alt="Vinícius Fontes - Fundador ArkheDigital"
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 768px) 208px, 256px"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#32C5EF] mb-2">
                Vinícius Fontes
              </h3>
              <p className="text-[#EAF7FC]/90 mb-4 leading-relaxed">
                Fundador da ArkheDigital, atua no desenvolvimento de soluções com
                Inteligência Artificial, automações, agentes, sites, landing
                pages e estruturas digitais voltadas para resultado. Seu foco é
                usar tecnologia de forma prática para ajudar empresas a vender
                mais, atender melhor e ganhar eficiência, sempre buscando
                soluções sob medida para cada cenário.
              </p>
              <p className="text-[#9CA3AF]">
                Com olhar estratégico e execução prática, Vinícius une
                tecnologia, automação e comunicação para transformar processos em
                operações mais organizadas, rápidas e escaláveis.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
