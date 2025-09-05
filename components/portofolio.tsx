"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { portfolioItems } from "@/data/portofolio";

export function Portofolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, portfolioItems.length - itemsPerView);
  const currentItems = portfolioItems.slice(currentIndex, currentIndex + itemsPerView);
  
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerView;
      return nextIndex >= portfolioItems.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexNew = prevIndex - itemsPerView;
      return prevIndexNew < 0 ? maxIndex : prevIndexNew;
    });
  };

  return (
    <section id="portofolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Portofolio</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Portofolio kami adalah bukti nyata dari komitmen kami
          terhadap kualitas dan dedikasi dalam memberikan produk dan
          pelayanan yang terbaik bagi pelanggan.
        </p>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((item, index) => (
              <div
                key={`${currentIndex}-${item.id}`}
                className="relative h-full overflow-hidden rounded-lg shadow-xl group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={item.image}
                  alt={item.image}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  width={400}
                  height={400}
                  priority={index < 3}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {item.description}
                  </p>
                </div> */}
              </div>
            ))}
          </div>

          {portfolioItems.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full cursor-pointer shadow-lg transition-all duration-200 hover:scale-110 z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full cursor-pointer shadow-lg transition-all duration-200 hover:scale-110 z-10"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {portfolioItems.length > itemsPerView && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(portfolioItems.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? "bg-blue-600 scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-6">
          <p className="text-gray-600">
            {Math.floor(currentIndex / itemsPerView) + 1} of {Math.ceil(portfolioItems.length / itemsPerView)}
          </p>
        </div>
      </div>
    </section>
  );
}