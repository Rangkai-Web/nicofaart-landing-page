"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { catalogProducts } from "@/data/catalog-products";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp, FaDownload } from "react-icons/fa";

const categories = ["Semua", "Almari", "Bed", "Dining Set", "Kursi Tamu", "Sofa"];

export function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  // Update productsPerPage based on screen size
  useEffect(() => {
    const updateProductsPerPage = () => {
      if (window.innerWidth < 768) {
        setProductsPerPage(1);
      } else {
        setProductsPerPage(6);
      }
    };

    updateProductsPerPage();
    window.addEventListener('resize', updateProductsPerPage);
    return () => window.removeEventListener('resize', updateProductsPerPage);
  }, []);

  const filteredProducts =
    activeCategory === "Semua"
      ? catalogProducts
      : catalogProducts.filter((product) => product.category === activeCategory);

  // Reset to first page when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section id="catalog-products" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Kategori Produk Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Pilih dari berbagai kategori furniture berkualitas tinggi dengan
            tukang kayu terbaik dari Jepara. Unduh katalog produk kami untuk melihat lebih lanjut.
          </p>
          <a href="/doc/CATALOG-NWW-ALL-PRODUCT.pdf" target="_blank" rel="noopener noreferrer" download="CATALOG-NWW-ALL-PRODUCT.pdf">
            <Button className="mt-8 bg-[#8B1C1C] hover:bg-[#8B1C1C]/90 text-white !p-6 border-0 shadow-2xl hover:shadow-xl transition-all duration-300 animate-bounce">
              <FaDownload className="w-4 h-4" /> Unduh Katalog
            </Button>
          </a>
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
                onClick={() => handleCategoryChange(category)}
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
            {currentProducts.map((product, index) => (
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
                        draggable={false}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-primary">
                          {product.price}
                        </span>
                      </div>
                      <a
                        href={`https://wa.me/6289647662838?text=Halo, saya ingin memesan ${product.name} dengan harga ${product.price}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-start gap-2 w-max bg-primary text-primary-foreground text-sm font-medium rounded-full px-4 py-2"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        Pesan Sekarang
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Pagination - Only visible on mobile */}
        {totalPages > 1 && (
          <div className="md:hidden mt-8">
            <div className="flex items-center justify-center gap-2">
              {/* Previous Button */}
              <Button
                variant="default"
                size="sm"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;
                  // Show first page, last page, current page, and pages around current
                  const shouldShow = 
                    pageNumber === 1 || 
                    pageNumber === totalPages || 
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1);

                  if (shouldShow) {
                    return (
                      <Button
                        key={pageNumber}
                        variant={currentPage === pageNumber ? "default" : "outline"}
                        size="sm"
                        onClick={() => goToPage(pageNumber)}
                        className={`w-8 h-8 p-0 ${
                          currentPage === pageNumber
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                            : "border-border hover:bg-muted"
                        }`}
                      >
                        {pageNumber}
                      </Button>
                    );
                  } else if (
                    pageNumber === currentPage - 2 || 
                    pageNumber === currentPage + 2
                  ) {
                    return (
                      <span key={pageNumber} className="px-2 text-muted-foreground">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Next Button */}
              <Button
                variant="default"
                size="sm"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Page Info */}
            <div className="text-center mt-4 text-sm text-muted-foreground">
              Halaman {currentPage} dari {totalPages} ({filteredProducts.length} produk)
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
