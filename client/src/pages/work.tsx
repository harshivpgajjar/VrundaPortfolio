import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import communicationCollage from "@assets/IMG-20250730-WA0182_1753946886348.jpg";
import nightShiftPoster from "@assets/poster_1753948710814.jpeg";

const workCategories = [
  {
    title: "SHORT FILM",
    description: "\"The Night Shift\" was a group collaboration for a college project. I wrote the script and co-directed the film with my peers. Neo-noir was the allotted genre and we hoped to do justice to it.",
    projects: [
      {
        title: "The Night Shift",
        videoUrl: "https://youtu.be/mfqwNWA2X1A?si=oLHD2mGSp8sm07i7",
        thumbnail: nightShiftPoster,
        type: "video"
      }
    ]
  },
  {
    title: "YOUTUBE SCRIPTS FOR KOTAK 811",
    description: "During my tenure as a Copywriting Trainee at Schbang, I had the opportunity to work on various projects, including creating content for Kotak 811. I was responsible for writing scripts for several of their campaigns. This experience allowed me to develop my scriptwriting skills and contribute to impactful brand storytelling.",
    projects: [
      {
        title: "Kotak 811 Campaign Script 1",
        videoUrl: "https://youtu.be/CY3zOtCc7ls?si=HBOcuirosm20prg2",
        thumbnail: "https://img.youtube.com/vi/CY3zOtCc7ls/maxresdefault.jpg",
        type: "video"
      },
      {
        title: "Kotak 811 Campaign Script 2", 
        videoUrl: "https://youtu.be/t-p6X6FNwQQ?si=Arf1OLr3OywQRdzD",
        thumbnail: "https://img.youtube.com/vi/t-p6X6FNwQQ/maxresdefault.jpg",
        type: "video"
      },
      {
        title: "Kotak 811 Campaign Script 3",
        videoUrl: "https://youtu.be/wvrjm0n_j7w?si=3NBuDPSelghjXWkr", 
        thumbnail: "https://img.youtube.com/vi/wvrjm0n_j7w/maxresdefault.jpg",
        type: "video"
      }
    ]
  },
  {
    title: "COPYWRITING",
    description: "Strategic brand messaging and persuasive content that drives action and engagement across digital platforms.",
    projects: [
      "Brand Voice Development",
      "Website Copy",
      "Social Media Content",
      "Email Campaigns"
    ]
  },
  {
    title: "STORYTELLING", 
    description: "Authentic narratives that connect with audiences through compelling personal and brand stories.",
    projects: [
      "Personal Essays",
      "Brand Narratives",
      "Content Strategy",
      "Editorial Features"
    ]
  },
  {
    title: "SCRIPTWRITING",
    description: "Visual storytelling through scripts for various media formats and digital content.",
    projects: [
      "Video Scripts",
      "Podcast Scripts",
      "Social Media Scripts",
      "Presentation Content"
    ]
  },
  {
    title: "CREATIVE STRATEGY",
    description: "Strategic content planning that aligns with brand goals and audience engagement objectives.",
    projects: [
      "Content Planning",
      "Editorial Calendars",
      "Campaign Development",
      "Audience Research"
    ]
  }
];

export function Work() {
  const [activeCategory, setActiveCategory] = useState<string>("SHORT FILM");

  const categories = [
    "SHORT FILM",
    "YOUTUBE SCRIPTS FOR KOTAK 811", 
    "COPYWRITING",
    "STORYTELLING",
    "SCRIPTWRITING", 
    "CREATIVE STRATEGY"
  ];

  const getActiveCategory = () => {
    return workCategories.find(cat => cat.title === activeCategory);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <span className="font-mono text-sm font-bold tracking-wider cursor-pointer text-white hover:text-gray-300 transition-colors">
                VRUNDA MUNDHRA
              </span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/">
                <span className="font-mono text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">
                  HOME
                </span>
              </Link>
              <Link href="/work">
                <span className="font-mono text-sm text-white font-bold cursor-pointer">
                  WORK
                </span>
              </Link>
              <Link href="/blog">
                <span className="font-mono text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">
                  BLOG
                </span>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: `url(${communicationCollage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-mono text-4xl md:text-6xl font-bold mb-6 tracking-wider text-black">
              WORK
            </h1>
            <p className="font-mono text-sm text-black max-w-2xl mx-auto leading-relaxed">
              A collection of my professional work spanning scriptwriting, copywriting, 
              storytelling, and creative strategy across various media and platforms.
            </p>
          </motion.div>

          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-mono text-xs px-4 py-2 border transition-all duration-300 ${
                  activeCategory === category
                    ? 'border-black bg-black text-white'
                    : 'border-black text-black hover:border-gray-500 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Selected Category Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {getActiveCategory() && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border border-black p-8 hover:bg-gray-50 transition-all duration-300"
            >
              <h2 className="font-mono text-2xl font-bold mb-6 tracking-wider text-black">
                {getActiveCategory()?.title}
              </h2>
              
              <p className="font-mono text-sm text-black mb-8 leading-relaxed">
                {getActiveCategory()?.description}
              </p>

              <div className="space-y-4">
                {/* Check if this category has multiple videos (like Kotak scripts) */}
                {getActiveCategory()?.projects.some(p => typeof p === 'object' && p !== null && 'type' in p && p.type === 'video') && 
                 getActiveCategory()?.projects.length! > 1 ? (
                  // Multiple videos layout - grid for Kotak scripts
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getActiveCategory()?.projects.map((project, projectIndex) => (
                      <div key={projectIndex}>
                        {typeof project === 'object' && project !== null && 'type' in project && project.type === 'video' ? (
                          <a 
                            href={project.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                          >
                            <div className="relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300">
                              <img 
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                  <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 font-mono text-xs text-gray-600 group-hover:text-black transition-colors">
                              → SCRIPT {projectIndex + 1}
                            </div>
                          </a>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : (
                  // Single video or text projects layout
                  <>
                    {getActiveCategory()?.projects.map((project, projectIndex) => (
                      <div key={projectIndex}>
                        {typeof project === 'object' && project !== null && 'type' in project && project.type === 'video' ? (
                          // Single video project with large thumbnail
                          <div className="max-w-lg mx-auto">
                            <a 
                              href={project.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block group"
                            >
                              <div className="relative overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300">
                                <img 
                                  src={project.thumbnail}
                                  alt={project.title}
                                  className={`w-full object-contain group-hover:scale-105 transition-transform duration-300 ${
                                    project.thumbnail === nightShiftPoster ? 'h-auto max-h-[600px]' : 'aspect-video object-cover'
                                  }`}
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M8 5v14l11-7z"/>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 text-center font-mono text-sm text-gray-600 hover:text-black transition-colors">
                                → {typeof project === 'object' && project !== null && 'title' in project ? project.title : 'Video'}
                              </div>
                            </a>
                          </div>
                        ) : (
                          // Regular text project
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="font-mono text-sm text-gray-500 hover:text-black transition-colors cursor-pointer p-4 border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                              → {typeof project === 'string' ? project : 'Project'}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* Only show VIEW SAMPLES link for non-video categories */}
              {!getActiveCategory()?.projects.some(p => typeof p === 'object' && p !== null && 'type' in p && p.type === 'video') && (
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <div className="font-mono text-sm text-gray-400">
                    VIEW SAMPLES →
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}