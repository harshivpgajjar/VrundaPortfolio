import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Feather } from "lucide-react";
import { TypewriterText } from "@/components/typewriter-text";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with Dark Academia Atmosphere */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/80 via-charcoal/60 to-deep-charcoal/90" />
        <div className="absolute inset-0 vintage-paper opacity-10" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 text-antique-gold/20"
        >
          <BookOpen size={40} />
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 text-burnished-copper/20"
        >
          <Feather size={32} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream-highlight mb-8 leading-tight"
        >
          <TypewriterText 
            text="Words that breathe,"
            speed={80}
            delay={800}
          />
          <br />
          <TypewriterText 
            text="stories that live"
            speed={80}
            delay={2000}
          />
        </motion.h1>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-lg md:text-xl text-cream-highlight/90 italic mb-8 max-w-2xl mx-auto leading-relaxed manuscript-border p-6 bg-charcoal/30 backdrop-blur-sm"
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
            className="bg-antique-gold hover:bg-antique-gold/90 text-deep-charcoal px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:glow flex items-center justify-center gap-2"
          >
            Explore My Work
            <ArrowRight size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#about")}
            className="border-2 border-cream-highlight text-cream-highlight hover:bg-cream-highlight hover:text-deep-charcoal px-8 py-3 font-semibold transition-all duration-300"
          >
            About My Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
