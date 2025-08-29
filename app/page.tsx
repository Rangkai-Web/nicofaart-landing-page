import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutUs } from "@/components/about-us";
import { StatsSection } from "@/components/stats-section";
import { ProductCategories } from "@/components/product-categories";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Portofolio } from "@/components/portofolio";
import { Testimonials } from "@/components/testimonials";
import { OrderNow } from "@/components/order-now";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <StatsSection />
      <ProductCategories />
      <WhyChooseUs />
      <Portofolio />
      <Testimonials />
      <OrderNow />
      <ContactSection />
      <Footer />
    </main>
  );
}
