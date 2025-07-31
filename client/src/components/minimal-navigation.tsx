import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useState } from "react";

export function MinimalNavigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    // Only scroll if we're on the home page
    if (location === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false); // Close mobile menu after navigation
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <Link href="/">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-wider cursor-pointer text-white hover:text-gray-300 transition-colors">
              VRUNDA MUNDHRA
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <span className={`font-mono text-sm transition-colors cursor-pointer ${
                location === '/' ? 'text-white font-bold' : 'text-gray-300 hover:text-white'
              }`}>
                HOME
              </span>
            </Link>
            <Link href="/work">
              <span className={`font-mono text-sm transition-colors cursor-pointer ${
                location === '/work' ? 'text-white font-bold' : 'text-gray-300 hover:text-white'
              }`}>
                WORK
              </span>
            </Link>
            {location === '/' ? (
              <>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="font-mono text-sm text-gray-300 hover:text-white transition-colors"
                >
                  ABOUT
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="font-mono text-sm text-gray-300 hover:text-white transition-colors"
                >
                  CONTACT
                </button>
              </>
            ) : null}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-3 border-t border-gray-700">
            <Link href="/">
              <span 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-mono text-sm transition-colors cursor-pointer px-2 py-1 ${
                  location === '/' ? 'text-white font-bold' : 'text-gray-300 hover:text-white'
                }`}
              >
                HOME
              </span>
            </Link>
            <Link href="/work">
              <span 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-mono text-sm transition-colors cursor-pointer px-2 py-1 ${
                  location === '/work' ? 'text-white font-bold' : 'text-gray-300 hover:text-white'
                }`}
              >
                WORK
              </span>
            </Link>
            {location === '/' ? (
              <>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block font-mono text-sm text-gray-300 hover:text-white transition-colors px-2 py-1 text-left w-full"
                >
                  ABOUT
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block font-mono text-sm text-gray-300 hover:text-white transition-colors px-2 py-1 text-left w-full"
                >
                  CONTACT
                </button>
              </>
            ) : null}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}