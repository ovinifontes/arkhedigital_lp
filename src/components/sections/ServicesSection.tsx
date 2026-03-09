"use client";

import {
  Zap,
  LayoutGrid,
  BarChart3,
  Globe,
  Landmark,
  GitBranch,
  Share2,
  Calendar,
  Video,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { SERVICES } from "@/lib/constants";

const ICON_MAP = {
  zap: Zap,
  "layout-grid": LayoutGrid,
  "bar-chart-3": BarChart3,
  globe: Globe,
  landmark: Landmark,
  "git-branch": GitBranch,
  "share-2": Share2,
  calendar: Calendar,
  video: Video,
} as const;

export function ServicesSection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionTitle
            title="Muito além dos agentes: soluções digitais sob medida"
            subtitle="Estrutura completa para o seu negócio crescer"
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon =
              ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Zap;
            return (
              <ScrollReveal key={service.name} delay={i * 0.05}>
                <div className="group p-6 rounded-2xl bg-[#071A2F]/80 border border-[#0C4488]/20 hover:border-[#32C5EF]/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#32C5EF]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#32C5EF]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#EAF7FC] mb-1">
                        {service.name}
                      </h4>
                      <p className="text-sm text-[#9CA3AF]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
