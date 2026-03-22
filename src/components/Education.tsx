"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    title: "Bachelor of Technology – Computer Science and Engineering",
    institution: "Lovely Professional University, Punjab, India",
    duration: "Aug 2023 – Present",
  },
  {
    title: "Intermediate",
    institution: "Prathibha Junior College, Hyderabad, Telangana",
    duration: "Jun 2021 – Mar 2023",
    score: "Percentage: 78%",
  },
  {
    title: "Matriculation",
    institution: "Geethanjali High School, Hyderabad, Telangana",
    duration: "Jun 2020 – Apr 2021",
    score: "Percentage: 100%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 w-full relative bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-1/2 md:-translate-x-[1px]">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 relative flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary ring-4 ring-background" />

              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all text-primary">
                    <FaGraduationCap size={48} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white font-outfit mb-1">{edu.title}</h3>
                  <h4 className="text-primary font-medium mb-3">{edu.institution}</h4>
                  <div className="flex flex-col gap-1 text-sm text-gray-400">
                    <span className="flex items-center gap-2 font-mono bg-white/5 inline-block px-3 py-1 rounded w-fit">
                      {edu.duration}
                    </span>
                    <span className="font-semibold text-gray-300 mt-2">{edu.score}</span>
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
