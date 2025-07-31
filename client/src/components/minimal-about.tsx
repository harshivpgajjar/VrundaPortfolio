import { motion } from "framer-motion";
import profilePhoto from "@assets/WhatsApp Image 2025-06-20 at 13.14.29_35d03867_1753950571946.jpg";
import tvMonitorsBackground from "@assets/poster_1753948710814.jpeg";
import eyesPattern from "@assets/IMG-20250730-WA0185_1753946886350.jpg";

export function MinimalAbout() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${tvMonitorsBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Eyes Pattern Overlay - Subtly Hidden Across Page */}
      <div 
        className="absolute inset-0 bg-repeat opacity-5"
        style={{
          backgroundImage: `url(${eyesPattern})`,
          backgroundSize: '150px 150px',
          backgroundPosition: '0 0',
          mixBlendMode: 'multiply',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/85 to-black/90" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 sm:mb-12 lg:mb-16 tracking-wider text-center text-white"
        >
          ABOUT
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Vrunda Mundhra"
                className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-lg shadow-lg mx-auto"
              />
            </div>
            <p className="font-mono text-xs sm:text-sm text-gray-300 mt-3 sm:mt-4 text-center italic max-w-72 sm:max-w-80 mx-auto">
              Appearances are deceptive, so I will let my work speak.
            </p>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-mono text-lg sm:text-xl font-bold mb-4 sm:mb-6 tracking-wider text-white">
                BACKGROUND
              </h3>
              <p className="font-mono text-xs sm:text-sm leading-relaxed text-gray-300 mb-4 sm:mb-6">
                As a Mass Media graduate with a deep passion for storytelling, I specialize in creating 
                engaging content that connects with diverse audiences. My expertise spans writing, 
                digital media, and strategic communication, allowing me to craft narratives that 
                resonate across multiple platforms.
              </p>
              <p className="font-mono text-sm leading-relaxed text-gray-300">
                I focus on delivering authentic stories that drive engagement and foster lasting 
                connections. As an avid reader, I continuously draw inspiration from literature, 
                which has sharpened my writing skills and enhanced my storytelling ability.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xl font-bold mb-6 tracking-wider text-white">
                WHAT I AM TRULY PASSIONATE ABOUT
              </h3>
              <p className="font-mono text-sm leading-relaxed text-gray-300">
                I think I'm most passionate about art in all of its glory. From qawwalis to ghazals, 
                short films to MUBI's best feature films, poetry to haikus; irrespective of their 
                languages. Nothing gets lost in translation because art communicates through the eyes. 
                From their vision to your perspective. It drives me to feel better, think better and 
                see better. Only then will I be able to write better. For if I can't write what I feel, 
                I can't feel what I write.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}