"use client";

import { TypeAnimation } from "react-type-animation";

export default function Typing() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          2000,
          "Competitive Programmer",
          2000,
          "CTF Enthusiast",
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
