import { motion } from "framer-motion";
import heroImage from "@assets/WhatsApp Image 2025-07-31 at 13.41.52_b95d2ee6_1753949555475.jpg";

export function HeroNew() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-wider relative">
            <span 
              className="block relative grunge-text"
              style={{
                fontFamily: '"Nosifer", "Creepster", "Courier New", monospace',
                textShadow: '4px 4px 0px rgba(0,0,0,0.9), 8px 8px 0px rgba(0,0,0,0.5), 2px 2px 20px rgba(255,255,255,0.3)',
                letterSpacing: '0.08em',
                transform: 'skew(-1deg) rotate(-0.5deg)',
                filter: 'contrast(1.3) brightness(1.2) drop-shadow(2px 2px 8px rgba(0,0,0,0.8))',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)',
              }}
            >
              THE WORLD
            </span>
            <span 
              className="block relative mt-4 grunge-text"
              style={{
                fontFamily: '"Nosifer", "Creepster", "Courier New", monospace',
                textShadow: '4px 4px 0px rgba(0,0,0,0.9), 8px 8px 0px rgba(0,0,0,0.5), 2px 2px 20px rgba(255,255,255,0.3)',
                letterSpacing: '0.08em',
                transform: 'skew(1deg) rotate(0.3deg)',
                filter: 'contrast(1.3) brightness(1.2) drop-shadow(2px 2px 8px rgba(0,0,0,0.8))',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)',
              }}
            >
              THROUGH MY
            </span>
            <span 
              className="block relative mt-4 text-red-400 grunge-text"
              style={{
                fontFamily: '"Nosifer", "Creepster", "Courier New", monospace',
                textShadow: '4px 4px 0px rgba(139,0,0,0.9), 8px 8px 0px rgba(139,0,0,0.5), 2px 2px 20px rgba(255,100,100,0.4)',
                letterSpacing: '0.08em',
                transform: 'skew(-0.5deg) rotate(-0.2deg)',
                filter: 'contrast(1.4) brightness(1.3) saturate(1.4) drop-shadow(3px 3px 10px rgba(139,0,0,0.6))',
                WebkitTextStroke: '1px rgba(255,0,0,0.2)',
              }}
            >
              TAINTED LENS
            </span>
          </h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-200 font-mono tracking-wide"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            Writer & Storyteller
          </motion.p>
          
          {/* Glitch effect overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                opacity: [0, 0.1, 0, 0.05, 0],
                scaleX: [1, 1.02, 1, 0.98, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10 mix-blend-overlay"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Sparkle Sticker */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute top-20 right-4 sm:right-10 text-4xl sm:text-6xl z-10"
        style={{ 
          filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))',
          animation: 'sparkle 3s ease-in-out infinite'
        }}
      >
        ✨
      </motion.div>

      {/* Disco Ball Sticker */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-32 left-4 sm:left-16 text-3xl sm:text-5xl z-10"
        style={{ 
          filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.6))',
          animation: 'discoBall 4s ease-in-out infinite'
        }}
      >
        🪩
      </motion.div>
    </section>
  );
}