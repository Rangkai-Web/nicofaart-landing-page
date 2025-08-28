import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "NICOFAART - Furniture Asli JEPARA | Interior Furniture Berkualitas",
  description:
    "NICOFAART menyediakan furniture asli Jepara berkualitas tinggi. Meja, kursi, sofa, dan tempat tidur dengan craftsmanship terbaik dari Jepara, Jawa Tengah.",
  keywords:
    "furniture asli jepara, mebel jepara, interior furniture, meja kayu jepara, kursi jepara, sofa kayu, tempat tidur kayu, furniture berkualitas, woodwork jepara",
  generator: "v0.app",
  openGraph: {
    title: "NICOFAART - Furniture Asli JEPARA",
    description:
      "Furniture asli Jepara berkualitas tinggi dengan craftsmanship terbaik",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "NICOFAART - Furniture Asli JEPARA",
    description:
      "Furniture asli Jepara berkualitas tinggi dengan craftsmanship terbaik",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
