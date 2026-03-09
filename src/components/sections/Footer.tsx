"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[#0C4488]/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/logo_arkhedigital_maior.webp"
              alt="ArkheDigital"
              width={280}
              height={84}
              className="h-16 md:h-20 w-auto object-contain"
            />
            <p className="text-sm text-[#9CA3AF] text-center md:text-left max-w-md">
              ArkheDigital — Soluções digitais para vender mais, atender melhor
              e ganhar eficiência com tecnologia.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[#EAF7FC] font-medium">Vinícius Fontes</p>
            <p className="text-[#9CA3AF] text-sm">Cuiabá - MT</p>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-[#25D366] hover:text-[#20BD5A] font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              {WHATSAPP_NUMBER}
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#0C4488]/20 text-center">
          <p className="text-sm text-[#9CA3AF]">
            © {currentYear} ArkheDigital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
