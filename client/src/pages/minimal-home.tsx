import { useState, useEffect } from "react";
import { MinimalNavigation } from "@/components/minimal-navigation";
import { HeroNew } from "@/components/hero-new";
import { MinimalAbout } from "@/components/minimal-about";
import { MinimalContact } from "@/components/minimal-contact";
import { FloatingGallery } from "@/components/floating-gallery";
import { StartupOverlay } from "@/components/startup-overlay";

export default function MinimalHome() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const visited = localStorage.getItem('portfolio-visited');
    if (visited) {
      setShowOverlay(false);
      setHasVisited(true);
    }
  }, []);

  const handleOverlayClose = () => {
    setShowOverlay(false);
    setHasVisited(true);
    localStorage.setItem('portfolio-visited', 'true');
  };

  return (
    <div className="min-h-screen bg-white text-black relative">
      {showOverlay && !hasVisited && (
        <StartupOverlay onClose={handleOverlayClose} />
      )}
      <FloatingGallery />
      <MinimalNavigation />
      <HeroNew />
      <MinimalAbout />
      <MinimalContact />
    </div>
  );
}