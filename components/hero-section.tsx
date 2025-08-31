"use client";

import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const heroImages = [
  {
    src: "/elegant-wooden-dining-table-with-chairs-in-modern-.webp",
    alt: "Meja Makan Kayu Jepara Elegan",
  },
  {
    src: "/luxury-wooden-sofa-set-in-contemporary-interior.webp",
    alt: "Set Sofa Kayu Mewah",
  },
  {
    src: "/beautiful-wooden-bedroom-furniture-set-with-bed-an.webp",
    alt: "Set Kamar Tidur Kayu Berkualitas",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <section
      id="home"
      className="relative h-[70vh] md:h-[80vh] overflow-hidden"
    >
      {/* Image Carousel */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              width={800}
              height={800}
              alt={image.alt}
              priority={index === 0}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 z-0" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10 cursor-pointer"
        type="button"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10 cursor-pointer"
        type="button"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Furniture Asli JEPARA
          </h1>
          <p className="text-lg md:text-xl mb-8 text-pretty max-w-2xl mx-auto">
            Tukang kayu terbaik dari Jepara dengan kualitas premium. Meja,
            kursi, sofa, dan furniture interior berkualitas tinggi untuk rumah
            impian Anda.
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center pointer-events-auto">
            <a
              href="#catalog-products"
              className="bg-primary w-max hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full cursor-pointer hover:text-white"
            >
              Lihat Katalog
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}