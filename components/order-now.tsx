"use client";

// import { Button } from "@/components/ui/button";
// import { Phone, MessageCircle } from "lucide-react";

export function OrderNow() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
          Siap Mewujudkan Rumah Impian Anda?
        </h2>
        <p className="text-lg text-primary-foreground mb-0 text-pretty">
          Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran
          terbaik untuk furniture berkualitas tinggi
        </p>

        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white hover:bg-white/90 text-primary"
            onClick={() => window.open("https://wa.me/6289647662838", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp: 089647662838
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            onClick={() => window.open("tel:089647662838", "_blank")}
          >
            <Phone className="w-5 h-5 mr-2" />
            Telepon Sekarang
          </Button>
        </div> */}
      </div>
    </section>
  );
}
