import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { BlogPost } from "@shared/schema";
import { MinimalNavigation } from "@/components/minimal-navigation";

import "highlight.js/styles/github.css";

export default function BlogPostPage() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${slug}`],
    enabled: !!slug,
  });

  if (!match || !slug) {
    return <div>Blog post not found</div>;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white text-black">
        <MinimalNavigation />
        <div className="pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="font-mono text-sm tracking-widest text-gray-600 text-center">
              LOADING...
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white text-black">
        <MinimalNavigation />
        <div className="pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-mono text-2xl font-bold mb-4">404</h1>
            <p className="font-mono text-sm text-gray-600 mb-8">
              Blog post not found
            </p>
            <Link href="/blog">
              <span className="font-mono text-sm border border-gray-300 px-6 py-2 hover:bg-gray-100 transition-all duration-300">
                ← BACK TO BLOG
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <MinimalNavigation />
      
      <article className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back to blog link */}
            <div className="mb-8">
              <Link href="/blog">
                <span className="font-mono text-xs text-gray-400 hover:text-gray-600 transition-colors">
                  ← BACK TO BLOG
                </span>
              </Link>
            </div>

            {/* Post header */}
            <header className="mb-12 pb-8 border-b border-gray-100">
              <h1 className="font-mono text-3xl md:text-4xl font-bold mb-6 tracking-wide">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-gray-400 mb-6">
                <time>
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span>{post.readTime}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-gray-400 bg-gray-100 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Post content */}
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                className="markdown-content"
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Post footer */}
            <footer className="mt-16 pt-8 border-t border-gray-100">
              <div className="text-center">
                <Link href="/blog">
                  <span className="font-mono text-sm border border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300">
                    READ MORE POSTS
                  </span>
                </Link>
              </div>
            </footer>
          </motion.div>
        </div>
      </article>
    </div>
  );
}