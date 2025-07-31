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
          {/* Background - Classic Computer Desktop */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, #008080 0%, #004d4d 100%)',
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 10px 10px'
            }}
          />
          
          {/* Old Wooden Window Frame */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative max-w-md sm:max-w-lg w-full mx-4"
              style={{
                backgroundColor: '#c0c0c0',
                border: '2px outset #c0c0c0',
                boxShadow: "4px 4px 12px rgba(0,0,0,0.8)"
              }}
            >
              {/* Classic Windows Title Bar */}
              <div 
                className="text-white px-2 py-1 text-xs font-bold flex items-center justify-between"
                style={{
                  background: 'linear-gradient(90deg, #0080c0 0%, #0070b0 50%, #0080c0 100%)',
                  height: '20px',
                  fontSize: '11px',
                  fontFamily: 'MS Sans Serif, sans-serif'
                }}
              >
                <div className="flex items-center space-x-1">
                  <div 
                    className="w-4 h-4 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <div className="w-2 h-2 bg-white opacity-80"></div>
                  </div>
                  <span className="truncate">Vrunda Mundhra - Portfolio</span>
                </div>
                <div className="flex space-x-0">
                  <div 
                    className="w-4 h-3 flex items-center justify-center text-black font-bold text-xs"
                    style={{
                      backgroundColor: '#c0c0c0',
                      border: '1px outset #c0c0c0',
                      fontSize: '8px'
                    }}
                  >
                    _
                  </div>
                  <div 
                    className="w-4 h-3 flex items-center justify-center text-black font-bold text-xs"
                    style={{
                      backgroundColor: '#c0c0c0',
                      border: '1px outset #c0c0c0',
                      fontSize: '8px'
                    }}
                  >
                    □
                  </div>
                  <div 
                    className="w-4 h-3 flex items-center justify-center text-black font-bold text-xs"
                    style={{
                      backgroundColor: '#c0c0c0',
                      border: '1px outset #c0c0c0',
                      fontSize: '8px'
                    }}
                  >
                    ×
                  </div>
                </div>
              </div>
              
              {/* Window Content Area */}
              <div 
                className="p-4 sm:p-6 text-center"
                style={{
                  backgroundColor: '#c0c0c0',
                  border: '1px inset #c0c0c0',
                  fontFamily: 'MS Sans Serif, sans-serif'
                }}
              >
              
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {/* Classic Computer Monitor Icon */}
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <div 
                      className="relative"
                      style={{
                        width: '56px',
                        height: '48px',
                        backgroundColor: '#808080',
                        border: '2px outset #c0c0c0'
                      }}
                    >
                      <div 
                        className="absolute"
                        style={{
                          top: '4px',
                          left: '4px',
                          right: '4px',
                          bottom: '10px',
                          backgroundColor: '#000080',
                          border: '1px inset #c0c0c0'
                        }}
                      ></div>
                      <div 
                        className="absolute"
                        style={{
                          bottom: '-8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '20px',
                          height: '8px',
                          backgroundColor: '#808080',
                          border: '1px outset #c0c0c0'
                        }}
                      ></div>
                      <div 
                        className="absolute"
                        style={{
                          bottom: '-12px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '36px',
                          height: '4px',
                          backgroundColor: '#808080',
                          border: '1px outset #c0c0c0'
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <h2 
                    className="text-base sm:text-lg font-bold mb-4"
                    style={{
                      color: '#000000',
                      fontFamily: 'MS Sans Serif, sans-serif',
                      fontSize: '14px',
                      fontWeight: 'bold'
                    }}
                  >
                    Welcome to my Portfolio
                  </h2>
                  
                  <div 
                    className="mb-4 p-3 text-left"
                    style={{
                      backgroundColor: '#ffffff',
                      border: '2px inset #c0c0c0',
                      fontSize: '11px',
                      fontFamily: 'MS Sans Serif, sans-serif'
                    }}
                  >
                    <div className="mb-1">System: Loading creative modules...</div>
                    <div className="mb-1">System: Initializing storytelling engine...</div>
                    <div className="mb-1">System: Ready to explore portfolio.</div>
                    <motion.div
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      System: Press any key to continue_
                    </motion.div>
                  </div>
                  
                  <motion.div
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block"
                  >
                    <div 
                      className="px-4 py-1 text-black font-bold cursor-pointer"
                      style={{
                        backgroundColor: '#c0c0c0',
                        border: '2px outset #c0c0c0',
                        fontSize: '11px',
                        fontFamily: 'MS Sans Serif, sans-serif',
                        minWidth: '80px'
                      }}
                    >
                      Click Anywhere To Proceed
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Classic Window Resize Handle */}
              <div 
                className="absolute bottom-0 right-0 w-3 h-3 pointer-events-none"
                style={{
                  background: 'repeating-linear-gradient(-45deg, transparent 0px, #808080 1px, transparent 2px, transparent 3px)',
                }}
              ></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}