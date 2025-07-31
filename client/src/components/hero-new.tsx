import { motion } from "framer-motion";
import tvImage from "@assets/IMG-20250730-WA0183_1753954982723.jpg";

export function HeroNew() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-white">
      {/* TV Image Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          {/* TV Image */}
          <img 
            src={tvImage} 
            alt="Vintage TV" 
            className="w-full h-auto object-contain"
            style={{ maxHeight: '90vh' }}
          />
          
          {/* Text inside TV screen */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative" style={{ 
              marginTop: '-10%', 
              marginLeft: '4%',
              width: '30%',
              height: '40%'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                className="text-center h-full flex flex-col justify-center"
              >
                <div 
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black font-bold leading-tight"
                  style={{
                    fontFamily: '"Playfair Display", "Georgia", serif',
                    letterSpacing: '0.03em',
                    fontWeight: '700',
                  }}
                >
                  <div>BOX</div>
                  <div>OF</div>
                  <div>IDEAS</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Left side text - "THE WORLD THROUGH" */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute left-2 sm:left-4 md:left-8 z-20"
        style={{ top: '35%', transform: 'translateY(-50%)' }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight tracking-wider">
          <span 
            className="block"
            style={{
              fontFamily: '"Playfair Display", "Georgia", serif',
              letterSpacing: '0.03em',
              fontWeight: '700',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            THE WORLD
          </span>
          <span 
            className="block mt-2"
            style={{
              fontFamily: '"Playfair Display", "Georgia", serif',
              letterSpacing: '0.03em',
              fontWeight: '700',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            THROUGH
          </span>
        </h1>
      </motion.div>

      {/* Right side text - "MY TAINTED LENS" */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        className="absolute right-4 sm:right-8 md:right-16 top-1/2 transform -translate-y-1/2 z-20"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-600 leading-tight tracking-wider text-right">
          <span 
            className="block"
            style={{
              fontFamily: '"Playfair Display", "Georgia", serif',
              letterSpacing: '0.03em',
              fontWeight: '700',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            MY
          </span>
          <span 
            className="block mt-2"
            style={{
              fontFamily: '"Playfair Display", "Georgia", serif',
              letterSpacing: '0.03em',
              fontWeight: '700',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            TAINTED
          </span>
          <span 
            className="block mt-2"
            style={{
              fontFamily: '"Playfair Display", "Georgia", serif',
              letterSpacing: '0.03em',
              fontWeight: '700',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            LENS
          </span>
        </h1>
      </motion.div>
      
      {/* Sparkle Sticker */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
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
        transition={{ delay: 2.5, duration: 0.8 }}
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