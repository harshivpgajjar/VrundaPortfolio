import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";

export function MinimalNavigation() {
  const [location] = useLocation();
  
  const scrollToSection = (id: string) => {
    // Only scroll if we're on the home page
    if (location === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <span className="font-mono text-sm font-bold tracking-wider cursor-pointer hover:text-gray-600 transition-colors">
              VM
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <span className={`font-mono text-sm transition-colors cursor-pointer ${
                location === '/' ? 'text-black font-bold' : 'hover:text-gray-600'
              }`}>
                HOME
              </span>
            </Link>
            <Link href="/work">
              <span className={`font-mono text-sm transition-colors cursor-pointer ${
                location === '/work' ? 'text-black font-bold' : 'hover:text-gray-600'
              }`}>
                WORK
              </span>
            </Link>
            <Link href="/blog">
              <span className={`font-mono text-sm transition-colors cursor-pointer ${
                location?.startsWith('/blog') ? 'text-black font-bold' : 'hover:text-gray-600'
              }`}>
                BLOG
              </span>
            </Link>
            {location === '/' ? (
              <>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="font-mono text-sm hover:text-gray-600 transition-colors"
                >
                  ABOUT
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="font-mono text-sm hover:text-gray-600 transition-colors"
                >
                  CONTACT
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}