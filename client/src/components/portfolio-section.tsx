import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PortfolioModal } from "@/components/portfolio-modal";

type Category = "all" | "copywriting" | "poetry" | "scripting" | "essays" | "strategy";

interface PortfolioItem {
  id: string;
  category: Category;
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

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    category: "copywriting",
    title: "Brand Storytelling Campaign",
    description: "A comprehensive brand narrative that increased engagement by 340% and established emotional connection with target audience.",
    fullDescription: "This comprehensive brand storytelling campaign transformed how the client connected with their audience. Through careful research and strategic narrative development, we crafted a multi-touchpoint story that resonated deeply with their target demographic. The campaign resulted in a 340% increase in engagement, 25% boost in brand recognition, and established a lasting emotional connection that continues to drive customer loyalty.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    type: "Copywriting",
    typeColor: "text-antique-gold",
    date: "November 2024",
    client: "Artisan Collective",
    tags: ["Brand Strategy", "Copywriting", "Digital Marketing"],
    link: "#"
  },
  {
    id: "2",
    category: "poetry",
    title: "Echoes in Empty Halls",
    description: "\"In the silence between heartbeats, I found the rhythm of eternity...\"",
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    type: "Poetry",
    typeColor: "text-dusty-rose"
  },
  {
    id: "3",
    category: "scripting",
    title: "\"The Last Library\" - Short Film",
    description: "A contemplative script exploring the relationship between memory and written word in a post-digital world.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    type: "Scripting",
    typeColor: "text-muted-sage"
  },
  {
    id: "4",
    category: "essays",
    title: "Letters to My Younger Self",
    description: "An intimate exploration of growth, failure, and the wisdom found in accepting our imperfect humanity.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    type: "Personal Essay",
    typeColor: "text-copper"
  },
  {
    id: "5",
    category: "strategy",
    title: "Narrative Architecture Framework",
    description: "A comprehensive approach to building brand stories that resonate across multiple touchpoints and audiences.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    type: "Creative Strategy",
    typeColor: "text-antique-gold"
  },
  {
    id: "6",
    category: "copywriting",
    title: "Email Marketing Series",
    description: "A nurture sequence that transformed cold leads into devoted customers through storytelling and authenticity.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    type: "Copywriting",
    typeColor: "text-antique-gold"
  }
];

const categories = [
  { id: "all" as Category, label: "All Work" },
  { id: "copywriting" as Category, label: "Copywriting" },
  { id: "poetry" as Category, label: "Poetry" },
  { id: "scripting" as Category, label: "Scripting" },
  { id: "essays" as Category, label: "Personal Essays" },
  { id: "strategy" as Category, label: "Creative Strategy" },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = portfolioItems.filter(
    item => activeCategory === "all" || item.category === activeCategory
  );

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portfolio of Words
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-serif">
            A curated collection of my work across different mediums and genres
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-antique-gold text-deep-charcoal shadow-lg glow"
                  : "bg-warm-parchment text-foreground hover:bg-old-paper"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                <div className="bg-warm-parchment vintage-paper rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative manuscript-border">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <span className={`text-xs uppercase tracking-wide font-semibold ${item.typeColor}`}>
                      {item.type}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-foreground mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-antique-gold text-sm font-semibold group-hover:text-burnished-copper transition-colors">
                      View Project
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <PortfolioModal 
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
