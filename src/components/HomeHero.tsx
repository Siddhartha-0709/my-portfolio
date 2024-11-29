"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import Image from "next/image";
export default function HomeHero() {
  return (
    (<AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <Image
          src='https://res.cloudinary.com/djf6ew5uc/image/upload/v1729432171/spaces/l0qclmrte1yzgbeipxeq.png'
          height="1000"
          width="1000"
          alt="Avatar"
          className="h-32 w-32 rounded-full object-cover border-2 border-white dark:border-neutral-500" />

        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Siddhartha Mukherjee
        </div>
        <div
          className="font-extralight text-center text-base md:text-4xl dark:text-neutral-200 md:py-4 hidden md:block">
          Software Engineer | Architecting the World with Lines of Code
        </div>
        <div
          className="font-extralight text-center md:text-4xl dark:text-neutral-200 block md:hidden">
          Software Engineer 
        </div>
        <div
          className="font-extralight text-center md:text-4xl dark:text-neutral-200  block md:hidden">
            Architecting the World with Lines of Code
        </div>
        <p
            className="font-extralight text-base md:text-2xl md:text-center text-justify dark:text-neutral-200 md:px-14"
        >
        A passionate developer and tech enthusiast who loves turning ideas into impactful solutions. From designing seamless user experiences to deploying robust applications, I enjoy exploring the endless possibilities of technology.
        </p>
        <button
          type="button"
          onClick={()=>{window.open('/blogs')}}
          className="bg-black mt-5 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Read Blogs
        </button>
      </motion.div>
    </AuroraBackground>)
  );
}
