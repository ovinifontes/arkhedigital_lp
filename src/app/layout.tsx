import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ArkheDigital | Agentes de IA, automações e soluções digitais para negócios",
  description:
    "A ArkheDigital ajuda negócios a vender mais, atender melhor e ganhar eficiência com agentes de IA, automações, CRM, sites, landing pages e soluções digitais sob medida.",
  openGraph: {
    title: "ArkheDigital | Agentes de IA e soluções digitais",
    description:
      "Soluções digitais para vender mais, atender melhor e ganhar eficiência.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${plusJakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
