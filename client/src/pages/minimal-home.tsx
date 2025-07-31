import { MinimalNavigation } from "@/components/minimal-navigation";
import { HeroNew } from "@/components/hero-new";
import { MinimalAbout } from "@/components/minimal-about";
import { MinimalContact } from "@/components/minimal-contact";
import { FloatingGallery } from "@/components/floating-gallery";

export default function MinimalHome() {
  return (
    <div className="min-h-screen bg-white text-black relative">
      <FloatingGallery />
      <MinimalNavigation />
      <HeroNew />
      <MinimalAbout />
      <MinimalContact />
    </div>
  );
}