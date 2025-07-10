"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const text = "Say Hello";

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const email = form.current?.user_email.value.trim();
    const message = form.current?.user_message.value.trim();

    if (!email || !message) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current!.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
        }
      );
  };

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40 text-white py-12 gap-8">
        {/* animation container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl text-center">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}{" "}
            😀
          </div>
        </div>

        {/* form container */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="w-full lg:w-1/2 rounded-xl text-xl flex flex-col gap-8 p-12 justify-center bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
        >
          <label className="text-cyan-400 font-semibold">
            Dear Jayant Kumar,
          </label>
          <textarea
            rows={6}
            name="user_message"
            className="bg-transparent border-b-2 border-cyan-400 text-white placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-cyan-300 px-2 py-1 resize-none"
            placeholder="Write your message..."
          ></textarea>

          <label className="text-cyan-400 font-semibold">
            My mail address is:
          </label>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-cyan-400 text-white placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-cyan-300 px-2 py-1"
            placeholder="you@example.com"
          />

          <span className="text-cyan-400 font-semibold">Regards</span>

          <button
            type="submit"
            className="mt-2 bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-400 transition cursor-pointer font-semibold"
          >
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </PageTransition>
  );
}
