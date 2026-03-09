"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const NAV_LINKS = [
  { href: "#resumo", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-[#071A2F]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo_arkhedigital_maior.webp"
                alt="ArkheDigital"
                width={220}
                height={66}
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#EAF7FC]/80 hover:text-[#32C5EF] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <WhatsAppButton variant="primary" className="!px-6 !py-2.5 !text-base" />
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#EAF7FC]"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-[#071A2F]/98 backdrop-blur-md md:hidden pt-20 pb-8 px-6"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl text-[#EAF7FC] hover:text-[#32C5EF] font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <WhatsAppButton variant="primary" className="w-full justify-center" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
