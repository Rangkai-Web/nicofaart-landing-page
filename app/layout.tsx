import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "NICOFAART - Furniture Asli JEPARA | Interior Furniture Berkualitas",
  description:
    "NICOFAART menyediakan furniture asli Jepara berkualitas tinggi. Meja, kursi, sofa, dan tempat tidur dengan tukang kayu terbaik dari Jepara, Jawa Tengah.",
  keywords:
    "furniture asli jepara, mebel jepara, interior furniture, meja kayu jepara, kursi jepara, sofa kayu, tempat tidur kayu, furniture berkualitas, woodwork jepara",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "NICOFAART - Furniture Asli JEPARA",
    description:
      "Furniture asli Jepara berkualitas tinggi dengan tukang kayu terbaik",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "NICOFAART - Furniture Asli JEPARA",
    description:
      "Furniture asli Jepara berkualitas tinggi dengan tukang kayu terbaik",
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
