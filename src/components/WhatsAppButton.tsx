"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";

interface WhatsAppButtonProps {
  variant?: "primary" | "secondary" | "floating";
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  variant = "primary",
  className = "",
  children,
}: WhatsAppButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-full";

  const variants = {
    primary:
      "bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 text-lg shadow-lg shadow-[#25D366]/30 hover:scale-105 hover:shadow-xl",
    secondary:
      "border-2 border-[#32C5EF] text-[#32C5EF] hover:bg-[#32C5EF]/10 px-8 py-4 text-lg",
    floating:
      "fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl shadow-[#25D366]/40 hover:scale-110 hover:shadow-2xl",
  };

  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
      aria-label="Falar no WhatsApp"
    >
      {children ??
        (variant === "floating" ? (
          <MessageCircle className="w-7 h-7" />
        ) : (
          <>
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </>
        ))}
    </Link>
  );
}
