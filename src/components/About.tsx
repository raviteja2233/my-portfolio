"use client";

import { motion } from "framer-motion";

const highlights = [
  { value: "90+", label: "DSA Problems Solved" },
  { value: "3+", label: "Core Tech Stacks" },
  { value: "Strong", label: "Analytical Thinking" },
  { value: "Fast", label: "Continuous Learner" },
];

export default function About() {
  return (
    <section id="about" className="py-24 w-full relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p>
              I am a <span className="text-white font-medium">Computer Science Engineering</span> student deeply passionate about software development, data analysis, and algorithmic problem solving. For me, coding is more than just writing syntax; it's about engineering efficient, scalable solutions that solve real-world problems.
            </p>
            <p>
              My journey involves building <span className="text-white font-medium">secure systems</span>, exploring AI-driven technologies, and continuously pushing my boundaries. I pride myself on having a robust foundation in Data Structures and Algorithms, enabling me to optimize complex logic.
            </p>
            <p>
              When I'm not studying or coding, I enjoy giving back to the community and volunteering for impactful causes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl font-bold font-outfit text-white mb-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500 font-medium group-hover:text-gray-300 transition-colors">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
