"use client";

import { motion } from "framer-motion";
import { FaCode, FaChartBar, FaChartPie, FaBrain, FaGlobe } from "react-icons/fa";

const services = [
  {
    title: "Software Development",
    description: "Develop efficient software solutions using C++ and Python with a focus on algorithmic optimization and scalable logic.",
    icon: <FaCode />,
  },
  {
    title: "Data Analysis",
    description: "Perform data exploration and insights generation using Python libraries such as Pandas, NumPy, and Matplotlib.",
    icon: <FaChartBar />,
  },
  {
    title: "Data Visualization",
    description: "Create meaningful visual reports and dashboards to uncover insights from data.",
    icon: <FaChartPie />,
  },
  {
    title: "Algorithmic Problem Solving",
    description: "Design optimized solutions for complex problems using strong Data Structures and Algorithms knowledge.",
    icon: <FaBrain />,
  },
  {
    title: "Basic Web Development",
    description: "Build simple and responsive websites using HTML, CSS, and modern web frameworks.",
    icon: <FaGlobe />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 w-full relative bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-background border border-white/10 rounded-2xl p-8 h-full hover:-translate-y-2 hover:border-primary/50 transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none" />
                
                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-2xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white font-outfit mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
