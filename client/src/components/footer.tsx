import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-rich-brown text-cream-highlight py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="font-serif text-2xl font-semibold mb-4">
            Vrunda Mundhra
          </div>
          <p className="text-cream-highlight/80 mb-6 font-serif italic">
            "In every word lies the potential for connection, in every story the promise of understanding."
          </p>
          <div className="border-t border-cream-highlight/20 pt-6">
            <p className="text-cream-highlight/60 text-sm">
              © 2024 Vrunda Mundhra. All rights reserved. | Crafted with intention and attention to detail.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
