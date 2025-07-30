import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { MusingsSection } from "@/components/musings-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-cream text-rich-brown scroll-smooth">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <MusingsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
