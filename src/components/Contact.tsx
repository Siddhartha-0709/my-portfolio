/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "motion/react";
import React from 'react'

function Contact() {
  return (
    <div className="rounded-md h-[20rem] bg-black flex flex-col items-center justify-center relative w-full">
      <p className="font-bold text-xl md:text-4xl text-white">
        {"Connect with "}
        <span className="text-neutral-400">
          {"Me".split("").map((word, idx) => (
            <motion.span
              key={idx}
              className="inline-block"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}                 >
              {word}
            </motion.span>
          ))}
        </span>
      </p>
      <p className="text-sm md:text-lg text-neutral-500 max-w-3xl mx-auto py-4">
        I&apos;m open to new opportunities, collaborations, or just a friendly chat. Whether you&apos;re a fellow developer, a company looking for a developer, or just someone who wants to say Hi!,
      </p>
      <p className="text-sm md:text-lg text-neutral-500 max-w-3xl mx-auto mb-10">
        I'd love to hear from you.
      </p>
        <a href="mailto:siddharthamukherjee0709@gmail.com">
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Write me an Email
          </span>
      </button>
        </a>
    </div>
  )
}

export default Contact