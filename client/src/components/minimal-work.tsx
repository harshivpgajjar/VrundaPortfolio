import { motion } from "framer-motion";
import communicationCollage from "@assets/IMG-20250730-WA0182_1753946886348.jpg";

const workCategories = [
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
                  {category.projects.map((project, projectIndex) => (
                    <div 
                      key={projectIndex}
                      className="font-mono text-xs text-gray-500 hover:text-black transition-colors cursor-pointer"
                    >
                      → {project}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="font-mono text-xs text-gray-400">
                    VIEW SAMPLES →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}