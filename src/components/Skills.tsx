"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", percent: 90 },
      { name: "C", percent: 85 },
      { name: "Python", percent: 80 },
      { name: "JavaScript", percent: 75 },
    ],
  },
  {
    category: "Technologies / Libraries",
    items: [
      { name: "HTML", percent: 95 },
      { name: "CSS", percent: 90 },
      { name: "NumPy", percent: 80 },
      { name: "Pandas", percent: 85 },
      { name: "Matplotlib", percent: 75 },
      { name: "Seaborn", percent: 70 },
      { name: "Scikit-learn", percent: 65 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "VS Code", percent: 95 },
      { name: "Google Colab", percent: 90 },
      { name: "Power BI", percent: 75 },
      { name: "MS Excel", percent: 85 },
    ],
  },
  {
    category: "Core Strengths",
    items: [
      { name: "Data Structures & Algorithms", percent: 95 },
      { name: "Problem Solving", percent: 90 },
      { name: "Teamwork", percent: 100 },
      { name: "Adaptability", percent: 95 },
      { name: "Time Management", percent: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-secondary/10 rounded-bl-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />
              
              <h3 className="text-2xl font-bold text-white font-outfit mb-6 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-gradient-to-b from-primary to-secondary inline-block" />
                {skillGroup.category}
              </h3>

              <div className="space-y-5">
                {skillGroup.items.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                    <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
