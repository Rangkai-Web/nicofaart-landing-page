"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isMenuClick = menuRef.current?.contains(target);
      const isButtonClick = buttonRef.current?.contains(target);
      
      if (!isMenuClick && !isButtonClick) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/logo.webp"
                alt="NICOFAART"
                width={100}
                height={100}
                className="w-10 h-10 rounded-full border"
                draggable={false}
              />
              <h1 className="text-xl font-bold text-primary">NICOFAART</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  aria-label="Pergi ke halaman beranda"
                >
                  Beranda
                </a>
                <a
                  href="#catalog-products"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  aria-label="Lihat katalog produk furniture"
                >
                  Katalog Produk
                </a>
                <a
                  href="#portofolio"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  aria-label="Lihat portofolio karya furniture"
                >
                  Portofolio
                </a>
                <a
                  href="#about"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  aria-label="Pelajari tentang perusahaan NICOFAART"
                >
                  Tentang Kami
                </a>
                <a
                  href="#contact"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  aria-label="Hubungi kami untuk informasi lebih lanjut"
                >
                  Kontak
                </a>
              </div>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Button 
                onClick={() => window.open("https://wa.me/6289647662838", "_blank", "noopener,noreferrer")} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer min-w-[44px] min-h-[44px]"
                aria-label="Hubungi kami melalui WhatsApp"
              >
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden" ref={buttonRef}>
              <Button
                variant="default"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="min-w-[44px] min-h-[44px]"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" ref={menuRef} id="mobile-menu">
            <div className="p-6 space-y-1 absolute top-16 left-0 w-full z-[60] bg-card rounded-b-xl shadow-xl">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary block px-0 py-2 rounded-md text-base font-medium"
                aria-label="Pergi ke halaman beranda"
              >
                Beranda
              </a>
              <a
                href="#catalog-products"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary block px-0 py-2 rounded-md text-base font-medium"
                aria-label="Lihat katalog produk furniture"
              >
                Katalog Produk
              </a>
              <a
                href="#portofolio"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary block px-0 py-2 rounded-md text-base font-medium"
                aria-label="Lihat portofolio karya furniture"
              >
                Portofolio
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary block px-0 py-2 rounded-md text-base font-medium"
                aria-label="Pelajari tentang perusahaan NICOFAART"
              >
                Tentang Kami
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary block px-0 py-2 rounded-md text-base font-medium"
                aria-label="Hubungi kami untuk informasi lebih lanjut"
              >
                Kontak
              </a>
              <Button 
                onClick={() => window.open("https://wa.me/6289647662838", "_blank", "noopener,noreferrer")} 
                className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer min-h-[44px]"
                aria-label="Hubungi kami melalui WhatsApp"
              >
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
