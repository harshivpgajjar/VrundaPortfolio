import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { MusingsSection } from "@/components/musings-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ReadingProgress } from "@/components/reading-progress";
import { CursorTrail } from "@/components/cursor-trail";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <ReadingProgress />
      <CursorTrail />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <MusingsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
