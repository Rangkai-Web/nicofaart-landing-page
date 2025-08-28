import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.webp"
                alt="NICOFAART"
                width={100}
                height={100}
                className="w-10 h-10 rounded-full"
              />
              <h3 className="text-2xl font-bold text-primary">NICOFAART</h3>
            </div>
            <p className="text-background/80 mb-4 text-pretty">
              Perusahaan furniture berkualitas tinggi yang bergerak di bidang
              interior dengan craftsmanship terbaik dari Jepara, Jawa Tengah.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/nicofaart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/katalog.nicofaart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@nicofaart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Produk
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  Jl. Dr. Wahidin No. 49B, Demaan, Jepara, Jawa Tengah
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">089647662838</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  asknicofaart@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} NICOFAART. Semua hak cipta dilindungi.
            | Furniture Asli JEPARA
          </p>
        </div>
      </div>
    </footer>
  );
}
