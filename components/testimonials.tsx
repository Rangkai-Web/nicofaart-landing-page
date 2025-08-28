"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    location: "Jakarta",
    rating: 5,
    comment:
      "Kualitas furniture dari NICOFAART sangat memuaskan. Meja makan yang saya beli sangat kokoh dan finishing-nya rapi. Pelayanan juga sangat baik!",
    image: "/professional-indonesian-man-smiling.webp",
  },
  {
    id: 2,
    name: "Sari Dewi",
    location: "Surabaya",
    rating: 5,
    comment:
      "Set sofa ruang tamu yang saya pesan sesuai dengan ekspektasi. Kualitas kayu bagus dan desainnya elegan. Recommended banget!",
    image: "/indonesian-professional-woman-smiling.webp",
  },
  {
    id: 3,
    name: "Ahmad Rahman",
    location: "Bandung",
    rating: 5,
    comment:
      "Tempat tidur ukiran yang saya beli benar-benar berkualitas premium. Detail ukirannya halus dan finishing-nya sempurna. Terima kasih NICOFAART!",
    image: "/middle-aged-indonesian-man-with-glasses-smiling.webp",
  },
];

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Testimoni Pelanggan
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="mx-4">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                        />

                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-lg text-muted-foreground mb-6 italic text-pretty">
                        &quot;{testimonial.comment}&quot;
                      </blockquote>
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
