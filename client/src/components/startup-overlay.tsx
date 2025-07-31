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
          {/* Background */}
          <div className="absolute inset-0 bg-black" />
          
          {/* Window Frame */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-gray-200 border-2 border-gray-400 shadow-2xl max-w-md w-full"
              style={{
                boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.3), inset 2px 2px 4px rgba(255,255,255,0.7)"
              }}
            >
              {/* Window Title Bar */}
              <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-3 py-1 text-sm font-bold flex items-center justify-between border-b border-gray-400">
                <span>Vrunda Mundhra - Portfolio</span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                </div>
              </div>
              
              {/* Window Content */}
              <div className="p-8 text-center bg-gray-100">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Welcome Text */}
                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    Welcome to my Portfolio
                  </h2>
                  
                  {/* Instruction */}
                  <motion.p
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-gray-600 font-mono text-sm"
                  >
                    Click Anywhere To Proceed
                  </motion.p>
                  
                  {/* Decorative cursor indicator */}
                  <motion.div
                    animate={{ 
                      x: [0, 10, -10, 0],
                      y: [0, -5, 5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="mt-4 flex justify-center"
                  >
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.414l.707-.707zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Window Border Effect */}
              <div className="absolute inset-0 pointer-events-none border border-gray-300" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}