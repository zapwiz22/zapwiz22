"use client";

import { TypeAnimation } from "react-type-animation";

export default function Typing() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "A Full Stack Developer",
          2000,
          "A Competitive Programmer",
          2000,
          "A CTF Enthusiast",
          2000,
        ]}
        wrapper="span"
        speed={50}
        className="text-lg md:text-2xl text-gray-400 mb-6"
        repeat={Infinity}
      />
    </>
  );
}
