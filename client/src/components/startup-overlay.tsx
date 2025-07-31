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
          {/* Background - Realistic Outdoor Scene */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 0%, transparent 25%),
                radial-gradient(circle at 80% 15%, rgba(255,255,255,0.6) 0%, transparent 20%),
                linear-gradient(to bottom, 
                  #87CEEB 0%, 
                  #B0E0E6 30%, 
                  #98FB98 60%, 
                  #90EE90 80%, 
                  #228B22 100%
                )
              `,
            }}
          >
            {/* Subtle trees silhouette */}
            <div 
              className="absolute bottom-0 left-0 w-full h-32 opacity-30"
              style={{
                background: `
                  radial-gradient(ellipse at 20% 100%, #2F4F2F 0%, transparent 60%),
                  radial-gradient(ellipse at 60% 100%, #2F4F2F 0%, transparent 50%),
                  radial-gradient(ellipse at 85% 100%, #2F4F2F 0%, transparent 70%)
                `
              }}
            />
          </div>
          
          {/* Old Wooden Window Frame */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative max-w-lg sm:max-w-2xl w-full mx-4"
              style={{
                background: `
                  repeating-linear-gradient(
                    90deg,
                    #8B4513 0px,
                    #A0522D 2px,
                    #8B4513 4px,
                    #654321 6px,
                    #8B4513 8px
                  ),
                  linear-gradient(145deg, #8B4513 0%, #A0522D 30%, #654321 70%, #8B4513 100%)
                `,
                padding: '24px',
                borderRadius: '12px',
                boxShadow: `
                  0 0 60px rgba(0,0,0,0.8),
                  inset 0 0 30px rgba(0,0,0,0.4),
                  inset 2px 2px 8px rgba(139,69,19,0.8),
                  inset -2px -2px 8px rgba(101,67,33,0.8)
                `,
                border: '3px solid #654321'
              }}
            >
              {/* Realistic Window Glass with Multiple Panes */}
              <div 
                className="relative"
                style={{
                  aspectRatio: '5/4',
                  background: `
                    linear-gradient(135deg, 
                      rgba(255,255,255,0.15) 0%, 
                      rgba(255,255,255,0.05) 30%,
                      rgba(135,206,235,0.1) 60%,
                      rgba(255,255,255,0.08) 100%
                    )
                  `,
                  backdropFilter: 'blur(2px)',
                  border: '4px solid #654321',
                  borderRadius: '6px',
                  boxShadow: `
                    inset 0 0 20px rgba(0,0,0,0.2),
                    inset 2px 2px 8px rgba(255,255,255,0.1),
                    0 4px 15px rgba(0,0,0,0.3)
                  `
                }}
              >
                {/* Window Mullions - Vertical Center */}
                <div 
                  className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                  style={{
                    width: '12px',
                    background: `
                      repeating-linear-gradient(
                        90deg,
                        #654321 0px,
                        #8B4513 1px,
                        #654321 2px,
                        #A0522D 3px,
                        #654321 4px
                      ),
                      linear-gradient(90deg, #654321 0%, #8B4513 50%, #654321 100%)
                    `,
                    boxShadow: `
                      0 0 8px rgba(0,0,0,0.6),
                      inset 1px 0 3px rgba(255,255,255,0.2),
                      inset -1px 0 3px rgba(0,0,0,0.4)
                    `,
                    borderRadius: '2px'
                  }}
                ></div>
                
                {/* Window Mullions - Horizontal Center */}
                <div 
                  className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-10"
                  style={{
                    height: '12px',
                    background: `
                      repeating-linear-gradient(
                        180deg,
                        #654321 0px,
                        #8B4513 1px,
                        #654321 2px,
                        #A0522D 3px,
                        #654321 4px
                      ),
                      linear-gradient(180deg, #654321 0%, #8B4513 50%, #654321 100%)
                    `,
                    boxShadow: `
                      0 0 8px rgba(0,0,0,0.6),
                      inset 0 1px 3px rgba(255,255,255,0.2),
                      inset 0 -1px 3px rgba(0,0,0,0.4)
                    `,
                    borderRadius: '2px'
                  }}
                ></div>

                {/* Glass Reflections */}
                <div 
                  className="absolute top-4 left-4 w-20 h-32 opacity-30 pointer-events-none"
                  style={{
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.4) 0%, transparent 70%)',
                    borderRadius: '20px',
                    transform: 'skew(-10deg, -5deg)'
                  }}
                ></div>
                
                <div 
                  className="absolute top-8 right-6 w-16 h-24 opacity-20 pointer-events-none"
                  style={{
                    background: 'linear-gradient(-45deg, rgba(255,255,255,0.3) 0%, transparent 60%)',
                    borderRadius: '15px',
                    transform: 'skew(8deg, 3deg)'
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
              
              {/* Realistic Window Hardware */}
              
              {/* Left Hinges - More Detailed */}
              <div 
                className="absolute -left-3 top-8"
                style={{
                  width: '12px',
                  height: '32px',
                  background: `
                    linear-gradient(90deg, #2F2F2F 0%, #5A5A5A 30%, #3F3F3F 70%, #2F2F2F 100%),
                    repeating-linear-gradient(180deg, #4A4A4A 0px, #666666 2px, #4A4A4A 4px)
                  `,
                  borderRadius: '3px',
                  boxShadow: `
                    0 3px 8px rgba(0,0,0,0.7),
                    inset 1px 0 2px rgba(255,255,255,0.2),
                    inset -1px 0 2px rgba(0,0,0,0.8)
                  `,
                  border: '1px solid #333333'
                }}
              >
                {/* Hinge screws */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-800 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-800 rounded-full"></div>
              </div>
              
              <div 
                className="absolute -left-3 bottom-8"
                style={{
                  width: '12px',
                  height: '32px',
                  background: `
                    linear-gradient(90deg, #2F2F2F 0%, #5A5A5A 30%, #3F3F3F 70%, #2F2F2F 100%),
                    repeating-linear-gradient(180deg, #4A4A4A 0px, #666666 2px, #4A4A4A 4px)
                  `,
                  borderRadius: '3px',
                  boxShadow: `
                    0 3px 8px rgba(0,0,0,0.7),
                    inset 1px 0 2px rgba(255,255,255,0.2),
                    inset -1px 0 2px rgba(0,0,0,0.8)
                  `,
                  border: '1px solid #333333'
                }}
              >
                {/* Hinge screws */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-800 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-800 rounded-full"></div>
              </div>
              
              {/* Window Handle/Latch - More Realistic */}
              <div 
                className="absolute -right-2 top-1/2 transform -translate-y-1/2"
                style={{
                  width: '16px',
                  height: '20px',
                  background: `
                    radial-gradient(ellipse at 30% 30%, #DAA520 0%, #B8860B 40%, #8B6914 100%)
                  `,
                  borderRadius: '3px 8px 8px 3px',
                  boxShadow: `
                    0 2px 6px rgba(0,0,0,0.6),
                    inset 1px 1px 3px rgba(255,215,0,0.4),
                    inset -1px -1px 3px rgba(139,105,20,0.8)
                  `,
                  border: '1px solid #8B6914'
                }}
              >
                {/* Handle detail */}
                <div 
                  className="absolute top-1/2 right-1 transform -translate-y-1/2 w-2 h-3"
                  style={{
                    background: 'linear-gradient(90deg, #DAA520 0%, #B8860B 100%)',
                    borderRadius: '0 2px 2px 0',
                    boxShadow: 'inset 0 1px 1px rgba(255,215,0,0.3)'
                  }}
                ></div>
              </div>

              {/* Wood Grain Effects on Frame */}
              <div 
                className="absolute inset-2 pointer-events-none rounded-lg opacity-20"
                style={{
                  background: `
                    repeating-linear-gradient(
                      45deg,
                      transparent 0px,
                      rgba(101,67,33,0.3) 1px,
                      transparent 2px,
                      transparent 8px
                    ),
                    repeating-linear-gradient(
                      -45deg,
                      transparent 0px,
                      rgba(139,69,19,0.2) 1px,
                      transparent 2px,
                      transparent 12px
                    )
                  `
                }}
              ></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}