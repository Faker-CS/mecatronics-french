import type { Metadata } from "next";
import { Bebas_Neue, Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Mecatronic Center — Experts automobiles à Orléans",
  description:
    "Pare-brise, pneus, diagnostics, électronique et optimisation moteur : redonnez à votre véhicule tout son potentiel. Prenez rendez-vous au Mecatronic Center.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${bebas.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
