"use client";

import Brain from "@/components/brain";
import PageTransition from "@/components/PageTransition";
import works from "@/config/Experiences";
import tech from "@/config/Tech";
import { motion, useScroll } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const technologies = tech;

  const experiences = works;

  return (
    <PageTransition>
      <div
        ref={containerRef}
        className="h-full overflow-scroll text-white lg:flex"
      >
        {/* Left Content */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-40 lg:w-2/3 xl:w-1/2 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 mb-20">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <section className="flex flex-col gap-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">
                About Me
              </h1>
              <p className="text-lg leading-relaxed text-gray-300">
                Hello! I&apos;m{" "}
                <span className="text-white font-semibold">Jayant Kumar</span>,
                a second-year Computer Science Engineering student with a deep
                interest in tech and a drive to keep learning.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                I recently explored modern web development, and I&apos;m
                currently diving into{" "}
                <span className="text-white font-semibold">Next.js</span> and
                building full-stack apps.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                I enjoy tackling problems through{" "}
                <span className="text-white font-semibold">
                  competitive programming
                </span>{" "}
                and <span className="text-white font-semibold">CTFs</span>, and
                outside tech, I love{" "}
                <span className="text-white font-semibold">table tennis</span>{" "}
                and <span className="text-white font-semibold">football</span>.
              </p>
            </section>
          </motion.div>

          {/* Skills and Technologies Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Skills & <span className="text-cyan-400">Technologies</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 transition-all duration-300 opacity-100 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/20 p-4 rounded-xl hover:border-cyan-400/30 hover:scale-105"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-200">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              My <span className="text-cyan-400">Journey</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline line */}
                  {i !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
                  )}

                  <div className="flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                        <Calendar className="w-6 h-6 text-black" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                      >
                        <div className="flex flex-wrap items-start justify-between mb-3">
                          <h3 className="text-xl md:text-2xl font-bold text-white">
                            {exp.title}
                          </h3>
                          <span className="text-cyan-400 font-mono text-sm bg-cyan-400/10 px-3 py-1 rounded-full">
                            {exp.year}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 mb-4 text-gray-300">
                          <span className="font-semibold">{exp.company}</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="text-xs bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full border border-cyan-400/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12 md:py-16 lg:pt-18 lg:pb-100"
          >
            <blockquote className="text-2xl font-light italic text-gray-300 max-w-3xl mx-auto">
              &quot;Learning never exhausts the mind&quot;
            </blockquote>
            <cite className="text-cyan-400 text-lg mt-4 block">
              — Leonardo da Vinci
            </cite>
          </motion.div>
        </div>

        {/* Brain SVG on Right */}
        <div className="hidden lg:block sticky top-0 z-30 lg:w-1/3 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </PageTransition>
  );
}
