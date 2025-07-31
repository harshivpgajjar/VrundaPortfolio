import { MinimalNavigation } from "@/components/minimal-navigation";
import { MinimalBlog } from "@/components/minimal-blog";
import { FloatingGallery } from "@/components/floating-gallery";

export default function BlogListPage() {
  return (
    <div className="min-h-screen bg-white text-black relative">
      <FloatingGallery />
      <MinimalNavigation />
      
      <main className="pt-20">
        <div className="text-center py-16">
          <h1 className="font-mono text-4xl md:text-6xl font-bold mb-6 tracking-wider">
            BLOG
          </h1>
          <p className="font-mono text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Thoughts on writing, storytelling, and the craft of communication
          </p>
        </div>
        
        <MinimalBlog />
      </main>
    </div>
  );
}