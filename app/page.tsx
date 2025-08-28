import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ProductCategories } from "@/components/product-categories";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { OrderNow } from "@/components/order-now";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProductCategories />
      <WhyChooseUs />
      <Testimonials />
      <OrderNow />
      <ContactSection />
      <Footer />
    </main>
  );
}
