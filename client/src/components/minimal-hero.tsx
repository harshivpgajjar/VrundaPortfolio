import { motion } from "framer-motion";

export function MinimalHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h1 className="font-mono text-6xl md:text-8xl font-bold mb-8 tracking-wider">
            VRUNDA MUNDHRA
          </h1>
          
          <div className="font-mono text-lg md:text-xl text-gray-600 mb-12 tracking-widest">
            W\<br/>
            R\<br/>
            I\<br/>
            T\<br/>
            E\<br/>
            R\<br/>
            \<br/>
            A\<br/>
            N\<br/>
            D\<br/>
            \<br/>
            S\<br/>
            T\<br/>
            O\<br/>
            R\<br/>
            Y\<br/>
            T\<br/>
            E\<br/>
            L\<br/>
            L\<br/>
            E\<br/>
            R
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-mono text-sm md:text-base leading-relaxed text-gray-700 mb-8">
            As a Mass Media graduate with a passion for storytelling, I specialize in creating 
            engaging content that connects with and inspires diverse audiences. Skilled in writing, 
            digital media, and strategic communication, I craft clear and impactful narratives 
            that resonate across platforms.
          </p>
          
          <p className="font-mono text-sm md:text-base leading-relaxed text-gray-700 mb-12">
            My focus is on delivering authentic stories that drive engagement and foster lasting 
            connections. An avid reader, I continuously draw inspiration from literature, which 
            has helped me hone my writing skills and improve my storytelling ability.
          </p>

          <div className="font-mono text-sm">
            <a 
              href="mailto:vrunda.mundhra23@gmail.com"
              className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300"
            >
              CONNECT
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}