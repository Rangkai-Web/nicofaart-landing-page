import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NICOFAART - Furniture Asli JEPARA | Interior Furniture Berkualitas",
    template: "%s | NICOFAART - Furniture Asli JEPARA"
  },
  description:
    "NICOFAART menyediakan furniture asli Jepara berkualitas tinggi. Meja, kursi, sofa, dan tempat tidur dengan tukang kayu terbaik dari Jepara, Jawa Tengah. Custom furniture sesuai kebutuhan Anda.",
  keywords: [
    "NICOFAART",
    "NICOFAART Jepara",
    "NICOFAART Furniture",
    "NICOFAART Furniture Jepara",
    "nicofaart",
    "furniture asli jepara",
    "mebel jepara",
    "interior furniture",
    "meja kayu jepara",
    "kursi jepara",
    "sofa kayu",
    "tempat tidur kayu",
    "furniture berkualitas",
    "woodwork jepara",
    "custom furniture",
    "furniture handmade",
    "furniture jawa tengah",
    "almari jepara",
    "dining set jepara",
    "kursi tamu jepara"
  ],
  authors: [{ name: "NICOFAART" }],
  creator: "NICOFAART",
  publisher: "NICOFAART",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nicofaart.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    title: "NICOFAART - Furniture Asli JEPARA | Interior Furniture Berkualitas",
    description:
      "Furniture asli Jepara berkualitas tinggi dengan tukang kayu terbaik. Custom furniture sesuai kebutuhan Anda dengan kualitas premium.",
    type: "website",
    locale: "id_ID",
    url: "https://nicofaart.com",
    siteName: "NICOFAART",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "NICOFAART - Furniture Asli Jepara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NICOFAART - Furniture Asli JEPARA",
    description:
      "Furniture asli Jepara berkualitas tinggi dengan tukang kayu terbaik. Custom furniture sesuai kebutuhan Anda.",
    images: ["/logo.webp"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NICOFAART",
    "description": "Furniture asli Jepara berkualitas tinggi dengan tukang kayu terbaik",
    "url": "https://nicofaart.com",
    "logo": "https://nicofaart.com/logo.webp",
    "image": "https://nicofaart.com/logo.webp",
    "telephone": "+62-xxx-xxx-xxxx",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jepara, Jawa Tengah",
      "addressLocality": "Jepara",
      "addressRegion": "Jawa Tengah",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.5944",
      "longitude": "110.6714"
    },
    "openingHours": "Mo-Sa 08:00-17:00",
    "priceRange": "$$",
    "servedArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-6.5944",
        "longitude": "110.6714"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Furniture Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Meja Kayu Jepara",
            "description": "Meja kayu berkualitas tinggi buatan Jepara"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Kursi Jepara",
            "description": "Kursi kayu berkualitas tinggi buatan Jepara"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Sofa Kayu",
            "description": "Sofa kayu berkualitas tinggi buatan Jepara"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Tempat Tidur Kayu",
            "description": "Tempat tidur kayu berkualitas tinggi buatan Jepara"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/nicofaart",
      "https://www.facebook.com/nicofaart"
    ]
  };

  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B1C1C" />
        <meta name="color-scheme" content="light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="NICOFAART" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
