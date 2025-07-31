import { motion } from "framer-motion";
import profilePhoto from "@assets/WhatsApp Image 2025-06-20 at 13.14.29_35d03867_1753950571946.jpg";
import tvHead from "@assets/IMG-20250730-WA0183_1753946886349.jpg";

export function MinimalAbout() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(${tvHead})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gray-50/75" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-4xl md:text-6xl font-bold mb-16 tracking-wider text-center"
        >
          ABOUT
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-16 items-start">
          {/* First Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-mono text-xl font-bold mb-6 tracking-wider">
              BACKGROUND
            </h3>
            <p className="font-mono text-sm leading-relaxed text-gray-600">
              As a Mass Media graduate with a deep passion for storytelling, I specialize in creating 
              engaging content that connects with diverse audiences. My expertise spans writing, 
              digital media, and strategic communication, allowing me to craft narratives that 
              resonate across multiple platforms.
            </p>
            <p className="font-mono text-sm leading-relaxed text-gray-600">
              I focus on delivering authentic stories that drive engagement and foster lasting 
              connections. As an avid reader, I continuously draw inspiration from literature, 
              which has sharpened my writing skills and enhanced my storytelling ability.
            </p>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Vrunda Mundhra"
                className="w-72 h-72 object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Second Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-mono text-xl font-bold mb-6 tracking-wider">
              WHAT I AM TRULY PASSIONATE ABOUT
            </h3>
            <p className="font-mono text-sm leading-relaxed text-gray-600">
              I think I'm most passionate about art in all of its glory. From qawwalis to ghazals, 
              short films to MUBI's best feature films, poetry to haikus; irrespective of their 
              languages. Nothing gets lost in translation because art communicates through the eyes. 
              From their vision to your perspective. It drives me to feel better, think better and 
              see better. Only then will I be able to write better. For if I can't write what I feel, 
              I can't feel what I write.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}