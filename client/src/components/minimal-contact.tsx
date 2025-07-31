import { motion } from "framer-motion";
import { useState } from "react";
import eyesPattern from "@assets/IMG-20250730-WA0185_1753946886350.jpg";

export function MinimalContact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("vrunda.mundhra23@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-12"
        style={{
          backgroundImage: `url(${eyesPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-white/80" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="font-mono text-sm tracking-widest text-gray-600 mb-16">
            CONNECT
          </div>

          <div className="space-y-8">
            <div>
              <a 
                href="mailto:vrunda.mundhra23@gmail.com"
                className="font-mono text-2xl md:text-3xl hover:text-gray-600 transition-colors"
              >
                vrunda.mundhra23@gmail.com
              </a>
            </div>

            <div className="flex justify-center space-x-8">
              <button
                onClick={copyEmail}
                className="font-mono text-xs border border-gray-300 px-6 py-2 hover:bg-gray-100 transition-all duration-300"
              >
                {copied ? "COPIED!" : "COPY EMAIL"}
              </button>
              
              <a
                href="mailto:vrunda.mundhra23@gmail.com?subject=I WANT TO CONNECT"
                className="font-mono text-xs border border-black px-6 py-2 hover:bg-black hover:text-white transition-all duration-300"
              >
                SEND MESSAGE
              </a>
            </div>

            <div className="pt-16 border-t border-gray-100 mt-16">
              <p className="font-mono text-xs text-gray-400">
                LET'S CREATE SOMETHING MEANINGFUL TOGETHER
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}