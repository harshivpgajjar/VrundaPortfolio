import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface StartupOverlayProps {
  onClose: () => void;
}

export function StartupOverlay({ onClose }: StartupOverlayProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(onClose, 500); // Wait for exit animation
  };

  // Prevent scrolling when overlay is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] cursor-pointer"
          onClick={handleClick}
        >
          {/* Background - Sky/Nature View */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, #87CEEB 0%, #98FB98 40%, #90EE90 100%)',
            }}
          />
          
          {/* Old Wooden Window Frame */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative max-w-md sm:max-w-xl w-full mx-4"
              style={{
                background: 'linear-gradient(145deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: "0 0 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.3)"
              }}
            >
              {/* Window Glass Panes */}
              <div 
                className="relative bg-white bg-opacity-10 backdrop-blur-sm"
                style={{
                  aspectRatio: '4/3',
                  border: '3px solid #654321',
                  borderRadius: '4px',
                  boxShadow: 'inset 0 0 10px rgba(0,0,0,0.3)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
                }}
              >
                {/* Window Cross Frame - Vertical */}
                <div 
                  className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"
                  style={{
                    width: '6px',
                    background: 'linear-gradient(90deg, #654321 0%, #8B4513 50%, #654321 100%)',
                    boxShadow: '0 0 4px rgba(0,0,0,0.5)'
                  }}
                ></div>
                {/* Window Cross Frame - Horizontal */}
                <div 
                  className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2"
                  style={{
                    height: '6px',
                    background: 'linear-gradient(180deg, #654321 0%, #8B4513 50%, #654321 100%)',
                    boxShadow: '0 0 4px rgba(0,0,0,0.5)'
                  }}
                ></div>
              
                {/* Window Content - Center Message */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-center p-4"
                  >
                    {/* Welcome Message */}
                    <div 
                      className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-lg mb-4"
                      style={{
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                        Welcome to my Portfolio
                      </h2>
                      <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                        Step through this window into my world of storytelling
                      </p>
                      
                      {/* Vintage Note */}
                      <motion.div
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xs text-gray-500 italic font-mono"
                      >
                        Click Anywhere To Proceed
                      </motion.div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-4 right-4 text-2xl opacity-60"
                    >
                      🍃
                    </motion.div>
                    
                    <motion.div
                      animate={{ 
                        y: [0, 15, 0],
                        x: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 3.5, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute bottom-6 left-6 text-xl opacity-50"
                    >
                      🦋
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              
              {/* Window Hinges */}
              <div 
                className="absolute -left-2 top-6"
                style={{
                  width: '8px',
                  height: '20px',
                  background: 'linear-gradient(90deg, #4A4A4A 0%, #666666 50%, #4A4A4A 100%)',
                  borderRadius: '2px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}
              ></div>
              <div 
                className="absolute -left-2 bottom-6"
                style={{
                  width: '8px',
                  height: '20px',
                  background: 'linear-gradient(90deg, #4A4A4A 0%, #666666 50%, #4A4A4A 100%)',
                  borderRadius: '2px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}
              ></div>
              
              {/* Window Latch */}
              <div 
                className="absolute -right-1 top-1/2 transform -translate-y-1/2"
                style={{
                  width: '6px',
                  height: '12px',
                  background: 'linear-gradient(90deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)',
                  borderRadius: '1px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}
              ></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}