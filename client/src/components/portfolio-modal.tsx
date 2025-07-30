import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Tag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  type: string;
  typeColor: string;
  date?: string;
  client?: string;
  tags?: string[];
  link?: string;
}

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-deep-charcoal/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-warm-parchment vintage-paper rounded-lg z-50 overflow-hidden manuscript-border"
          >
            <div className="h-full overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-warm-parchment/95 backdrop-blur-sm border-b border-antique-gold/20 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`text-xs uppercase tracking-wide font-semibold ${item.typeColor}`}>
                      {item.type}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-1">
                      {item.title}
                    </h2>
                    {item.client && (
                      <p className="text-foreground/60 mt-1">Client: {item.client}</p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="text-foreground hover:text-antique-gold"
                  >
                    <X size={24} />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/20 to-transparent rounded-lg" />
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                  {item.date && (
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {item.date}
                    </div>
                  )}
                  {item.tags && (
                    <div className="flex items-center gap-1">
                      <Tag size={16} />
                      {item.tags.join(", ")}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="prose prose-lg text-foreground/90 font-serif leading-relaxed">
                  <p>{item.fullDescription || item.description}</p>
                </div>

                {/* Action Button */}
                {item.link && (
                  <div className="flex justify-center pt-4">
                    <Button
                      className="bg-antique-gold hover:bg-antique-gold/90 text-deep-charcoal font-semibold px-8 py-3 hover:glow"
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Project
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}