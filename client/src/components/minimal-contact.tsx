import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

export function MinimalContact() {

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Solar System Background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-400 rounded-full"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-1/3 right-2/3 w-0.5 h-0.5 bg-purple-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full animate-pulse shadow-lg"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="font-mono text-sm tracking-widest text-white mb-16">
            CONNECT
          </div>

          <div className="space-y-12 max-w-2xl mx-auto">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Mail size={24} className="text-white" />
              </div>
              <a 
                href="mailto:vrunda.mundhra23@gmail.com"
                className="font-mono text-xl md:text-2xl text-white hover:text-gray-300 transition-colors"
              >
                vrunda.mundhra23@gmail.com
              </a>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Linkedin size={24} className="text-white" />
              </div>
              <a 
                href="https://www.linkedin.com/in/vrundawrites/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xl md:text-2xl text-white hover:text-gray-300 transition-colors"
              >
                linkedin.com/in/vrundawrites
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Phone size={24} className="text-white" />
              </div>
              <a 
                href="tel:+918155022240"
                className="font-mono text-xl md:text-2xl text-white hover:text-gray-300 transition-colors"
              >
                +91 8155022240
              </a>
            </motion.div>

            <div className="pt-16 border-t border-white/20 mt-16">
              <p className="font-mono text-xs text-gray-400 text-center">
                LET'S CREATE SOMETHING MEANINGFUL TOGETHER
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}