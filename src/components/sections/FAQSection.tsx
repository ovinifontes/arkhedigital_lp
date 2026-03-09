"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { FAQ_ITEMS } from "@/lib/constants";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#0C4488]/30 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left gap-4 hover:text-[#32C5EF] transition-colors"
      >
        <span className="font-medium text-[#EAF7FC]">{question}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-[#32C5EF] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#9CA3AF] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionTitle
            title="Perguntas frequentes"
            subtitle="Tire suas dúvidas sobre a ArkheDigital"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto bg-[#0C4488]/10 rounded-2xl border border-[#0272D3]/20 p-6 md:p-8">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={item.q}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
