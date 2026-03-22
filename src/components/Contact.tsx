"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 w-full relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-outfit">Let's Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing web development work, software engineering roles, or data analysis opportunities. Feel free to reach out to me using the form or through my social links.
            </p>

            <div className="space-y-4">
              <a href="mailto:sraviteja3456@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Email</p>
                  <p className="text-white font-medium">sraviteja3456@gmail.com</p>
                </div>
              </a>

              <a href="tel:+916281312828" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Phone</p>
                  <p className="text-white font-medium">+91-6281312828</p>
                </div>
              </a>
            </div>

            <div className="pt-8">
              <p className="text-sm text-gray-400 font-medium mb-4 uppercase tracking-wider">Follow Me</p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/surayolla-raviteja" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#0077b5] hover:bg-[#0077b5] transition-all hover:scale-110 shadow-lg">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/raviteja2233" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:border-white hover:bg-white/20 transition-all hover:scale-110 shadow-lg">
                  <FaGithub size={20} />
                </a>
                <a href="https://leetcode.com/u/raviteja2233/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FFA116] hover:bg-[#FFA116]/20 transition-all hover:scale-110 shadow-lg">
                  <span className="font-bold font-mono text-xl">L</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />

            <form action="https://formsubmit.co/sraviteja3456@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Your Email</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300 ml-1">Subject</label>
                <input type="text" id="subject" name="_subject" required placeholder="Job Opportunity / Project Collaboration" className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                <textarea id="message" name="message" required rows={5} placeholder="Hello Raviteja, I have a project..." className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-shadow duration-300">
                Send Message <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
