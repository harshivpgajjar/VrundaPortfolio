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
          
          {/* Text overlay positioned in TV screen */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Adjust these positioning values to align with the TV screen */}
            <div className="relative" style={{ 
              marginTop: '-8%', 
              marginLeft: '2%',
              width: '45%',
              height: '35%'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="text-center h-full flex flex-col justify-center"
              >
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-tight tracking-wider">
                  <span 
                    className="block relative"
                    style={{
                      fontFamily: '"Playfair Display", "Georgia", serif',
                      letterSpacing: '0.03em',
                      fontWeight: '600',
                    }}
                  >
                    THE WORLD
                  </span>
                  <span 
                    className="block relative mt-1"
                    style={{
                      fontFamily: '"Playfair Display", "Georgia", serif',
                      letterSpacing: '0.03em',
                      fontWeight: '600',
                    }}
                  >
                    THROUGH MY
                  </span>
                  <span 
                    className="block relative mt-1 text-red-600"
                    style={{
                      fontFamily: '"Playfair Display", "Georgia", serif',
                      letterSpacing: '0.03em',
                      fontWeight: '700',
                    }}
                  >
                    TAINTED LENS
                  </span>
                </h1>
                
                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-xs sm:text-sm md:text-base text-gray-700 font-mono tracking-wide mt-2"
                >
                  Writer & Storyteller
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
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