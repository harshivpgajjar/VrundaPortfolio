import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "On the Alchemy of Words",
    excerpt: "There's something magical that happens when the right word finds its place in a sentence. It's like watching a key turn in a lock, opening doors to understanding that weren't there moments before...",
    date: "December 15, 2024",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "The Writer's Dilemma: Perfectionism vs Progress",
    excerpt: "Every writer knows the weight of the blank page and the paralysis that comes with wanting every word to be perfect. But what if perfection is the enemy of expression...",
    date: "December 8, 2024",
    readTime: "3 min read"
  }
];

export function MusingsSection() {
  return (
    <section id="musings" className="py-24 bg-rich-brown text-cream-highlight relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Musings & Reflections
          </h2>
          <p className="text-xl text-cream-highlight/80 max-w-3xl mx-auto font-serif">
            Free-flowing thoughts, latest pieces, and contemplations on the craft of writing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-10 hover:bg-cream-highlight/10 transition-all duration-300 cursor-pointer group manuscript-border elegant-shadow hover:elegant-shadow-lg"
            >
              <div className="flex items-center text-sm text-antique-gold mb-4">
                <time>{post.date}</time>
                <span className="mx-2">•</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h3 className="font-serif text-2xl font-bold mb-6 group-hover:text-antique-gold transition-colors">
                {post.title}
              </h3>
              
              <p className="text-cream-highlight/80 leading-relaxed mb-8 text-lg">
                {post.excerpt}
              </p>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-antique-gold hover:text-burnished-copper transition-colors font-semibold bg-antique-gold/10 px-4 py-2 rounded-full"
              >
                Continue reading
                <ArrowRight size={16} className="ml-2" />
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-antique-gold hover:bg-antique-gold/90 text-deep-charcoal px-10 py-4 font-semibold transition-all duration-300 gap-2 hover:glow rounded-full elegant-shadow text-lg"
          >
            View All Musings
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
