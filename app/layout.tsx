import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "IEBCA Solidária - Doe e Transforme Vidas",
  description:
    "Plataforma de doações da Igreja Batista Evangélica de Casa Amarela. Doe alimentos, roupas e itens de higiene para famílias em situação de vulnerabilidade.",
  keywords: [
    "doação",
    "solidariedade",
    "Casa Amarela",
    "Recife",
    "igreja",
    "ação social",
    "ODS",
  ],
  authors: [{ name: "IEBCA Solidária" }],
  openGraph: {
    title: "IEBCA Solidária - Doe e Transforme Vidas",
    description:
      "Doe alimentos, roupas e itens de higiene para famílias em situação de vulnerabilidade.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
