"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaTrophy, FaCode, FaChartLine, FaShieldAlt } from "react-icons/fa";

const CountUp = ({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const achievements = [
  {
    icon: <FaCode />,
    number: 100,
    suffix: "+",
    title: "Coding Problems Solved",
    description: "Across LeetCode, CodeChef & HackerRank, sharpening problem-solving skills.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <FaShieldAlt />,
    number: 2,
    suffix: "",
    title: "Security Projects",
    description: "Network Scanner and Password Strength Checker with advanced techniques.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <FaCode />,
    number: 4,
    suffix: "+",
    title: "Certifications",
    description: "From Coursera, IBM, Google, and FreeCodeCamp on networking and development.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: <FaTrophy />,
    number: 5,
    suffix: "+",
    title: "Core Competencies",
    description: "Python, C/C++, Cybersecurity, Network Security, and Linux administration.",
    color: "from-orange-400 to-yellow-500"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 w-full relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
              
              <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center text-3xl mb-6 relative">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-md group-hover:opacity-40 transition-opacity`} />
                <span className="relative z-10 text-white">{item.icon}</span>
              </div>

              <div className="text-4xl md:text-5xl font-bold font-outfit text-white mb-2">
                <CountUp end={item.number} suffix={item.suffix} />
              </div>
              
              <h3 className="text-lg font-bold text-gray-200 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
