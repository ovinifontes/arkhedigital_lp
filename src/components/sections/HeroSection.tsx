"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero3DBackground } from "@/components/Hero3DBackground";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-mesh grid-pattern overflow-hidden">
      <Hero3DBackground />

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16 md:pt-24 md:pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={item} className="mb-6">
            <Image
              src="/logo_arkhedigital_maior.webp"
              alt="ArkheDigital"
              width={600}
              height={180}
              className="mx-auto h-32 sm:h-36 md:h-40 lg:h-44 w-auto object-contain"
              priority
            />
          </motion.div>

          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAF7FC] leading-tight mb-6"
          >
            Agentes de IA e soluções digitais para sua empresa{" "}
            <span className="text-[#32C5EF]">vender mais</span>,{" "}
            <span className="text-[#32C5EF]">atender melhor</span> e <span className="text-[#32C5EF]">aumentar seu lucro</span>.
            </motion.h1>
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A ArkheDigital ajuda negócios a responder mais rápido, organizar o
            atendimento, automatizar processos e aproveitar melhor cada
            oportunidade com tecnologia aplicada ao que realmente gera resultado.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <WhatsAppButton variant="primary" />
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 text-[#32C5EF] hover:text-[#32C5EF]/80 font-medium transition-colors"
            >
              Quero entender como funciona
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
