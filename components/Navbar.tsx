"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/blog", title: "Blog" },
    { url: "/contact", title: "Contact" },
  ];

  const topVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        duration: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <nav className="relative h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40 bg-transparent">
      {/* Logo */}
      <Link href="/" className="group text-xl transition duration-300">
        <pre className="text-white font-mono text-sm leading-none transition duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_10px_#ffffffaa]">
          {`
▄▖       ▘▄▖▄▖▄▖
▗▘▀▌▛▌▌▌▌▌▗▘▄▌▄▌
▙▖█▌▙▌▚▚▘▌▙▖▙▖▙▖
    ▌           
`}
        </pre>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        {links.map((link) => {
          const isActive = pathname === link.url;

          return (
            <Link
              key={link.title}
              href={link.url}
              className={`relative px-1 transition-all duration-300 cursor-pointer
    ${
      isActive
        ? "text-white drop-shadow-[0_0_6px_#ffffffcc] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
        : "text-gray-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
    }
  `}
            >
              {link.title}
            </Link>
          );
        })}
      </div>

      {/* Hamburger + Mobile Menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          />
          <motion.div
            variants={centerVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          />
          <motion.div
            variants={bottomVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-10 text-3xl z-40 transition-all duration-300"
        >
          {links.map((link) => (
            <motion.div variants={listItemVariants} key={link.title}>
              <Link
                key={link.url}
                href={link.url}
                onClick={() => setOpen(false)}
                className={`relative transition-all duration-300 px-2 cursor-pointer ${
                  pathname === link.url
                    ? "text-white drop-shadow-[0_0_6px_#ffffffcc] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    : "text-gray-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                }`}
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
