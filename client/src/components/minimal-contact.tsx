import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function MinimalContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:vrunda.mundhra23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Solar System Background */}
      <div className="absolute inset-0 opacity-15">
        {/* Sun at center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 rounded-full animate-pulse shadow-xl"></div>
        
        {/* Orbital rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/8 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/6 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/4 rounded-full"></div>
        
        {/* Planets */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48">
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-orange-400 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80">
          <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 w-2 h-2 bg-red-600 rounded-full"></div>
        </div>
        
        {/* Stars */}
        <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/5 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full"></div>
        <div className="absolute top-1/5 right-1/2 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="font-mono text-sm tracking-widest text-white mb-16">
            CONNECT
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-12">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Mail size={24} className="text-white" />
              </div>
              <a 
                href="mailto:vrunda.mundhra23@gmail.com"
                className="font-mono text-xl md:text-2xl text-white hover:text-gray-300 transition-colors"
              >
                vrunda.mundhra23@gmail.com
              </a>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Linkedin size={24} className="text-white" />
              </div>
              <a 
                href="https://www.linkedin.com/in/vrundawrites/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xl md:text-2xl text-white hover:text-gray-300 transition-colors"
              >
                linkedin.com/in/vrundawrites
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Phone size={24} className="text-white" />
              </div>
              <a 
                href="tel:+918155022240"
                className="font-mono text-xl md:text-2xl text-white hover:text-gray-300 transition-colors"
              >
                +91 8155022240
              </a>
            </motion.div>

            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            >
              <h3 className="font-mono text-xl font-bold mb-8 tracking-wider text-white">
                SEND A MESSAGE
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-mono text-sm text-white mb-2 block">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="font-mono text-sm text-white mb-2 block">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="font-mono text-sm text-white mb-2 block">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-mono text-sm font-bold py-3 px-6 rounded hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>

          <div className="pt-16 border-t border-white/20 mt-16">
            <p className="font-mono text-xs text-gray-400 text-center">
              LET'S CREATE SOMETHING MEANINGFUL TOGETHER
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}