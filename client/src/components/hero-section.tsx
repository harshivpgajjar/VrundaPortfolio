import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rich-brown/60 via-rich-brown/40 to-rich-brown/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-warm-cream mb-8 leading-tight"
        >
          Words that breathe,<br />stories that live
        </motion.h1>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-lg md:text-xl text-warm-cream/90 italic mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          "Every word is a door, every sentence a hallway leading to the infinite chambers of human experience."
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#portfolio")}
            className="bg-antique-gold hover:bg-antique-gold/90 text-rich-brown px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
          >
            Explore My Work
            <ArrowRight size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#about")}
            className="border-2 border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-rich-brown px-8 py-3 font-semibold transition-all duration-300"
          >
            About My Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
