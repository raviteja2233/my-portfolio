"use client";

import { motion } from "framer-motion";
import { FaCertificate, FaDesktop } from "react-icons/fa";

const trainings = [
  {
    title: "Python Development",
    duration: "Cipher School",
    learnings: ["Python fundamentals", "Application development", "Best practices"],
  }
];

const certifications = [
  { name: "Computer Communications – Coursera | Nov' 24", link: "https://drive.google.com/file/d/1fj2n5ip7DyBJlOu_Yd6GMFfbgdFEaIph/view?usp=sharing" },
  { name: "Introduction to Hardware and Operating Systems – IBM-Coursera | Sep' 24", link: "https://drive.google.com/file/d/1EaJ4G3BeWaiAIw79HjakXGcRaDfQvQwv/view?usp=sharing" },
  { name: "The Bits and Bytes of Computer Networking – Google-Coursera | Sep' 24", link: "https://drive.google.com/file/d/11D7oEjLRbhXq4T6qxavyPnARYHzEMCtS/view?usp=sharing" },
  { name: "Responsive Web Design – FreeCodeCamp | Nov' 23", link: "https://drive.google.com/file/d/1cQggjZyd0bpbEArBiyrqOhiooUQ3sjD-/view?usp=sharing" }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 w-full relative bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Training & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Training */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white font-outfit mb-8 flex items-center gap-3">
              <FaDesktop className="text-primary" /> Training
            </h3>
            <div className="space-y-6">
              {trainings.map((training, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-2">{training.title}</h4>
                  <p className="text-primary text-sm font-mono mb-4 bg-primary/10 inline-block px-3 py-1 rounded">
                    {training.duration}
                  </p>
                  <ul className="space-y-2">
                    {training.learnings.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white font-outfit mb-8 flex items-center gap-3">
              <FaCertificate className="text-secondary" /> Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <a key={index} href={cert.link} target={cert.link !== "#" ? "_blank" : "_self"} rel="noopener noreferrer" className="block group flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-secondary/50 transition-all duration-300 cursor-pointer">
                  <div className="mt-1 p-2 rounded-lg bg-secondary/20 text-secondary group-hover:scale-110 transition-transform">
                    <FaCertificate size={16} />
                  </div>
                  <p className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                    {cert.name}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
