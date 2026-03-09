"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero3DBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const orb1Y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const orb2Y = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const orb3Y = useTransform(scrollYProgress, [0, 0.3], [0, 60]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orbs com gradiente e blur - efeito 3D + parallax no scroll */}
      <motion.div
        style={{ y: orb1Y }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#0272D3]/20 blur-3xl"
      />
      <motion.div
        style={{ y: orb2Y }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#32C5EF]/15 blur-3xl"
      />
      <motion.div
        style={{ y: orb3Y }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-1/3 w-64 h-64 rounded-full bg-[#0C4488]/25 blur-3xl"
      />
      {/* Grid de fundo */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(50, 197, 239, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(50, 197, 239, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
