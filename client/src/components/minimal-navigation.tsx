import { motion } from "framer-motion";

export function MinimalNavigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
          <div className="font-mono text-sm font-bold tracking-wider">
            VM
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('work')}
              className="font-mono text-sm hover:text-gray-600 transition-colors"
            >
              WORK
            </button>
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
          </div>
        </div>
      </div>
    </motion.nav>
  );
}