"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Network Port Scanner Using Python",
    description: "Developed a robust network port scanner application for identifying open ports and services on target systems.",
    longDescription: "Features include socket programming, TCP/IP protocol implementation, multi-threaded scanning, detailed port analysis, and comprehensive CLI interface for ease of use.",
    tech: ["Python", "Socket Programming", "TCP/IP Basics", "Port Scanning", "CLI Tools"],
    github: "https://github.com/raviteja2233/Network-Port-Scanner-Using-Python-.git",
    imagePlaceholder: "Port Scanner",
  },
  {
    title: "Password Strength Checker",
    description: "Built a sophisticated password strength evaluation tool with real-time feedback and security recommendations.",
    longDescription: "Implements cybersecurity best practices, string processing algorithms, complexity analysis, and provides actionable suggestions for improving password security.",
    tech: ["Python", "Cybersecurity Basics", "String Processing", "Security Analysis"],
    github: "https://github.com/raviteja2233/Password-Strength-Checker-project-.git",
    imagePlaceholder: "Password Checker",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 w-full relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-0">
                   <h3 className="text-4xl font-outfit font-bold text-white/20 uppercase tracking-widest">{project.imagePlaceholder}</h3>
                </div>
                {/* Decorative gradients */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-3xl rounded-full mix-blend-screen scale-150 group-hover:scale-100 transition-transform duration-700" />
              </div>

              {/* Project Content */}
              <div className="p-8 relative z-20 bg-background/50 backdrop-blur-md border-t border-white/10">
                <h3 className="text-2xl font-bold text-white font-outfit mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 font-medium mb-2">
                  {project.description}
                </p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300"
                    title="View Source on GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-secondary hover:border-secondary hover:scale-110 transition-all duration-300"
                    title="Live Preview"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
