import { MinimalNavigation } from "@/components/minimal-navigation";
import { MinimalHero } from "@/components/minimal-hero";
import { MinimalWork } from "@/components/minimal-work";
import { MinimalAbout } from "@/components/minimal-about";
import { MinimalContact } from "@/components/minimal-contact";

export default function MinimalHome() {
  return (
    <div className="min-h-screen bg-white text-black">
      <MinimalNavigation />
      <MinimalHero />
      <MinimalWork />
      <MinimalAbout />
      <MinimalContact />
    </div>
  );
}