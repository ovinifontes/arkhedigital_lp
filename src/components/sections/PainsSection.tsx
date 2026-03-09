"use client";

import {
  Clock,
  MessageSquareX,
  Sun,
  FolderOpen,
  Repeat,
  Users,
  GitBranch,
  BellOff,
  UserX,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { PAINS } from "@/lib/constants";

const ICON_MAP = {
  clock: Clock,
  "message-x": MessageSquareX,
  sun: Sun,
  folder: FolderOpen,
  repeat: Repeat,
  users: Users,
  "git-branch": GitBranch,
  "bell-off": BellOff,
  "user-x": UserX,
} as const;

export function PainsSection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionTitle
            title="Seu negócio pode estar perdendo oportunidades sem perceber"
            subtitle="Identificamos e resolvemos os gargalos que impedem seu crescimento"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {PAINS.map((pain, i) => {
            const Icon = ICON_MAP[pain.icon as keyof typeof ICON_MAP] ?? Clock;
            return (
              <ScrollReveal key={pain.text} delay={i * 0.05}>
                <div
                  className="group p-6 rounded-2xl bg-[#0C4488]/10 border border-[#0272D3]/20 hover:border-[#32C5EF]/40 hover:bg-[#0C4488]/20 transition-all duration-300 perspective-1000"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#32C5EF]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#32C5EF]" />
                    </div>
                    <p className="text-[#EAF7FC] font-medium">{pain.text}</p>
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
