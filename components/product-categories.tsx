"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = ["Semua", "Meja", "Kursi", "Sofa", "Tempat Tidur"];

const products = [
  {
    id: 1,
    name: "Meja Makan Minimalis",
    category: "Meja",
    description: "Meja makan minimalis dengan desain yang elegan dan modern",
    image: "/minimalist-wooden-dining-table.webp",
    price: "Rp 2.500.000",
  },
  {
    id: 2,
    name: "Kursi Tamu Klasik",
    category: "Kursi",
    description: "Kursi tamu klasik dengan detail ukiran yang menarik",
    image: "/classic-wooden-chair-with-carved-details.webp",
    price: "Rp 850.000",
  },
  {
    id: 3,
    name: "Sofa Ruang Tamu",
    category: "Sofa",
    description: "Sofa ruang tamu dengan desain yang elegan dan nyaman",
    image: "/elegant-wooden-sofa-with-cushions.webp",
    price: "Rp 4.200.000",
  },
  {
    id: 4,
    name: "Tempat Tidur Ukiran",
    category: "Tempat Tidur",
    description: "Tempat tidur ukiran dengan desain yang unik dan menarik",
    image: "/carved-wooden-bed-frame-with-headboard.webp",
    price: "Rp 3.800.000",
  },
  {
    id: 5,
    name: "Meja Kerja Modern",
    category: "Meja",
    description: "Meja kerja modern dengan desain yang minimalis dan fungsional",
    image: "/modern-wooden-desk-with-drawers.webp",
    price: "Rp 1.800.000",
  },
  {
    id: 6,
    name: "Set Kursi Makan",
    category: "Kursi",
    description: "Set kursi makan dengan desain yang modern dan nyaman",
    image: "/set-of-wooden-dining-chairs.webp",
    price: "Rp 1.200.000",
  },
];

export function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProducts =
    activeCategory === "Semua"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="products" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Kategori Produk Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Pilih dari berbagai kategori furniture berkualitas tinggi dengan
            craftsmanship terbaik dari Jepara
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "border-border hover:bg-muted hover:text-foreground"
                } cursor-pointer`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <Card className="py-0 group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={256}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        style={{ height: "auto" }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-primary">
                          {product.price}
                        </span>
                        {/* <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
                        >
                          Lihat Detail
                        </Button> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Lihat Semua Produk
          </Button>
        </div> */}
      </div>
    </section>
  );
}
