import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import PageTransition from "@/components/PageTransition";
import Typing from "@/components/Typing";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-full flex flex-col lg:flex-row-reverse px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40">
        {/* Top Half - Image */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2">
          <Image src="/pfp.png" alt="ZapWiz" fill className="object-contain" />
        </div>

        {/* Bottom Half - Text + Animation */}
        <div className="h-1/2 lg:h-full lg:w-1/2 text-white flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hello
            <span className="inline-block animate-wave origin-bottom-left ml-1">
              <Image
                src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                alt="wave"
                width={40}
                height={40}
                className="inline"
              />
            </span>
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            I&apos;m <span className="text-cyan-400">Jayant Kumar</span>
          </h1>

          <Typing />

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <Link href="/portfolio">
              <button className="bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-400 transition cursor-pointer">
                View My Work
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
      </div>
    </PageTransition>
  );
}
