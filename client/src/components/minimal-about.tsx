import { motion } from "framer-motion";

export function MinimalAbout() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <div>
            <div className="font-mono text-sm tracking-widest text-gray-600 mb-8">
              A\<br/>
              B\<br/>
              O\<br/>
              U\<br/>
              T
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-lg font-bold mb-4 tracking-wide">
                BACKGROUND
              </h3>
              <p className="font-mono text-sm text-gray-600 leading-relaxed">
                Mass Media graduate with a passion for storytelling and strategic 
                communication. Specialized in creating engaging content that connects 
                with diverse audiences across digital platforms.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-lg font-bold mb-4 tracking-wide">
                EXPERTISE
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-mono text-xs text-gray-500">WRITING</div>
                  <div className="font-mono text-xs text-gray-500">STORYTELLING</div>
                  <div className="font-mono text-xs text-gray-500">COPYWRITING</div>
                </div>
                <div className="space-y-2">
                  <div className="font-mono text-xs text-gray-500">STRATEGY</div>
                  <div className="font-mono text-xs text-gray-500">DIGITAL MEDIA</div>
                  <div className="font-mono text-xs text-gray-500">CONTENT</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-lg font-bold mb-4 tracking-wide">
                APPROACH
              </h3>
              <p className="font-mono text-sm text-gray-600 leading-relaxed">
                Focused on delivering authentic stories that drive engagement and 
                foster lasting connections. Continuously drawing inspiration from 
                literature to enhance storytelling ability and craft impactful narratives.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}