"use client";

import {
  Zap,
  Clock,
  MessageCircle,
  Target,
  Users,
  FolderKanban,
  Repeat,
  Shield,
  TrendingUp,
  BarChart3,
  Smile,
  Layers,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { BENEFITS } from "@/lib/constants";

const ICONS = [
  Zap,
  Clock,
  MessageCircle,
  Target,
  Users,
  FolderKanban,
  Repeat,
  Shield,
  TrendingUp,
  BarChart3,
  Smile,
  Layers,
];

export function BenefitsSection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionTitle
            title="O que um Agente de IA pode fazer pelo seu negócio"
            subtitle="Benefícios reais que transformam a operação do seu negócio"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {BENEFITS.map((benefit, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <ScrollReveal key={benefit} delay={i * 0.03}>
                <div className="group flex items-center gap-4 p-4 rounded-xl bg-[#071A2F]/50 border border-[#0C4488]/20 hover:border-[#32C5EF]/30 hover:bg-[#0C4488]/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#32C5EF]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-[#32C5EF]" />
                  </div>
                  <span className="text-[#EAF7FC] text-sm font-medium">
                    {benefit}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
