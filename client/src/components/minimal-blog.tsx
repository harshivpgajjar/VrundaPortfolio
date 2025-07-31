import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { BlogPost } from "@shared/schema";

export function MinimalBlog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  if (isLoading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-sm tracking-widest text-gray-600 mb-16 text-center">
            LOADING BLOG...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm tracking-widest text-gray-600 mb-16 text-center">
            LATEST THOUGHTS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="border border-gray-200 p-8 hover:bg-gray-50 transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <time className="font-mono text-xs text-gray-400">
                          {new Date(post.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                        <span className="font-mono text-xs text-gray-400">
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-mono text-lg font-bold mb-4 tracking-wide group-hover:text-gray-600 transition-colors">
                        {post.title}
                      </h2>

                      <p className="font-mono text-sm text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs text-gray-400 bg-gray-100 px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="font-mono text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                        READ MORE →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}