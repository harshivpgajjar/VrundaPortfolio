import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-parchment parchment-texture">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-rich-brown mb-6">
              The Writer's Journey
            </h2>
            
            <div className="prose prose-lg text-rich-brown font-serif leading-relaxed space-y-4">
              <p>
                In the quiet corners of libraries and the dim glow of late-night writing sessions, I discovered my voice. I am Vrunda Mundhra, a writer who believes that words are the most powerful tool we possess to connect, inspire, and transform.
              </p>
              <p>
                My journey spans the realms of copywriting, poetry, scripting, and creative strategy. Each discipline has taught me something different about the craft of storytelling—from the precision of commercial copy that converts to the raw emotion of poetry that heals.
              </p>
              <p>
                I find inspiration in the spaces between silence and sound, in the pause before a revelation, in the careful selection of words that can make strangers feel understood. My work is an invitation to explore the depths of human experience through the written word.
              </p>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center text-antique-gold hover:text-copper transition-colors duration-300 font-semibold"
              >
                Let's collaborate
                <ArrowRight size={16} className="ml-2" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Vintage writing desk with fountain pen and manuscripts"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-antique-gold/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
