import { motion } from "framer-motion";
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

export function MinimalWork() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-12"
        style={{
          backgroundImage: `url(${communicationCollage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-white/80" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="font-mono text-sm tracking-widest text-gray-600 mb-8">
            SELECTED WORK
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {workCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="border border-gray-200 p-8 hover:bg-gray-50 transition-all duration-300">
                <h3 className="font-mono text-xl font-bold mb-4 tracking-wider">
                  {category.title}
                </h3>
                
                <p className="font-mono text-sm text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-2">
                  {/* Check if this category has multiple videos (like Kotak scripts) */}
                  {category.projects.some(p => typeof p === 'object' && p !== null && 'type' in p && p.type === 'video') && 
                   category.projects.length > 1 ? (
                    // Multiple videos layout - grid for Kotak scripts
                    <div className="grid grid-cols-1 gap-4">
                      {category.projects.map((project, projectIndex) => (
                        <div key={projectIndex}>
                          {typeof project === 'object' && project !== null && 'type' in project && project.type === 'video' ? (
                            <a 
                              href={project.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block group"
                            >
                              <div className="flex items-center space-x-4 p-3 border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                                <div className="relative flex-shrink-0 w-24 h-14 overflow-hidden">
                                  <img 
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                                      <svg className="w-3 h-3 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-grow">
                                  <div className="font-mono text-xs text-gray-600 group-hover:text-black transition-colors">
                                    → SCRIPT {projectIndex + 1}
                                  </div>
                                </div>
                              </div>
                            </a>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Single video or text projects layout
                    <>
                      {category.projects.map((project, projectIndex) => (
                        <div key={projectIndex}>
                          {typeof project === 'object' && project !== null && 'type' in project && project.type === 'video' ? (
                            // Single video project with large thumbnail
                            <div className="mb-4">
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
                                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                                      <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-2 font-mono text-xs text-gray-600 hover:text-black transition-colors">
                                  → {typeof project === 'object' && project !== null && 'title' in project ? project.title : 'Video'}
                                </div>
                              </a>
                            </div>
                          ) : (
                            // Regular text project
                            <div className="font-mono text-xs text-gray-500 hover:text-black transition-colors cursor-pointer">
                              → {typeof project === 'string' ? project : 'Project'}
                            </div>
                          )}
                        </div>
                      ))}
                    </>
                  )}
                </div>

                {/* Only show VIEW SAMPLES link for non-video categories */}
                {!category.projects.some(p => typeof p === 'object' && p !== null && 'type' in p && p.type === 'video') && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="font-mono text-xs text-gray-400">
                      VIEW SAMPLES →
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}