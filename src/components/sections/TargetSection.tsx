"use client";

import {
  Scissors,
  Store,
  ShoppingBag,
  Heart,
  Briefcase,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { TARGET_AUDIENCE } from "@/lib/constants";

const ICONS = [
  Scissors,
  Store,
  ShoppingBag,
  Heart,
  Briefcase,
  MapPin,
  MessageCircle,
];

export function TargetSection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionTitle
            title="Para quem a ArkheDigital faz sentido"
            subtitle="Negócios que precisam melhorar atendimento, comercial, organização e presença digital"
          />
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {TARGET_AUDIENCE.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <ScrollReveal key={item} delay={i * 0.05}>
                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0C4488]/20 border border-[#0272D3]/30 hover:border-[#32C5EF]/50 transition-all">
                  <Icon className="w-5 h-5 text-[#32C5EF]" />
                  <span className="text-[#EAF7FC] font-medium">{item}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
