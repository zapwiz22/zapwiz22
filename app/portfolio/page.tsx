"use client";

import PageTransition from "@/components/PageTransition";
import projects from "@/config/Projects";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const ref = useRef(null);

  const items = projects;
  const percent = 100 - 100 / (items.length + 1);
  // console.log(items.length);
  // console.log(percent);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${percent}%`]);

  return (
    <PageTransition>
      <div className="text-white h-[600vh]" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-center flex-col">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            My <span className="text-cyan-400">Works</span>
          </h1>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black" />
            {items.map((item, index) => (
              // each project
              <div
                className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-8 lg:px-16"
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl mx-auto flex flex-col items-center gap-8"
                >
                  {/* Project Image - Centered at top */}
                  <div className="relative w-full max-w-2xl aspect-video bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.img}
                        alt={`${item.title} image`}
                        fill
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Project Details - Below image */}
                  <div className="space-y-6 text-center max-w-2xl">
                    <h2 className="text-2xl sm:text-4xl font-bold">
                      {item.title}
                    </h2>

                    <p className="text-sm sm:text-lg text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Skills/Technologies */}
                    <div className="space-y-3">
                      <h3 className="text-[16px] md:text-lg font-semibold text-cyan-400">
                        Technologies Used:
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-xs bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 justify-center">
                      <Link
                        href={item.githubLink}
                        target="_blank"
                        className="bg-transparent border border-cyan-500 text-cyan-400 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 font-medium"
                      >
                        View Code
                      </Link>
                      <Link
                        href={item.liveLink}
                        target="_blank"
                        className="bg-cyan-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-cyan-400 transition-all duration-300 font-medium"
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="h-screen w-screen flex flex-col gap-6 p-6 items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black">
        {/* description*/}
        <p className="mb-6 drop-shadow-[0_0_10px_#ffffffaa] text-white font-medium md:text-lg hover:drop-shadow-[0_0_20px_#ffffffcc] transition-all duration-300">
          Building fast, scalable web apps.
          <br />
          Driven by curiosity.
          <br />
          Sharpened by CTFs & CP.
          <br />
          Always learning, always shipping.
          <br />
        </p>
        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          {/* add the link to the resume  */}
          <Link href="/">
            <button className="bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-400 transition cursor-pointer">
              View Résumé
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-transparent border border-cyan-500 text-cyan-400 px-4 py-2 rounded cursor-pointer hover:bg-cyan-500 hover:text-black transition">
              Contact Me
            </button>
          </Link>
        </div>
        {/* Social Links */}
        <div className="flex gap-6 text-2xl text-gray-400">
          <Link
            href="https://github.com/zapwiz22"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/zapwiz22"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://x.com/zapwiz22"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://codeforces.com/profile/zapwiz22"
            target="_blank"
            className="hover:text-white transition"
          >
            <SiCodeforces />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
