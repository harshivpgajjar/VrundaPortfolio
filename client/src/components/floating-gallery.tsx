import { motion } from "framer-motion";
import gooseSticker from "@assets/IMG-20250730-WA0184_1753946886350.jpg";

export function FloatingGallery() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating goose sticker */}
      <motion.div
        animate={{ 
          rotate: [0, 10, -10, 0],
          x: [0, 20, -20, 0],
          y: [0, -15, 15, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-32 h-32 opacity-20"
      >
        <img 
          src={gooseSticker}
          alt="Don't be a silly goose"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}