"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

export default function MyTimeLine() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
            Enterprise Cloud, Infrastructure and Oracle Tech
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Working at KPMG gaining experience Oracle Cloud Infrastructure
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Explored Oracle database administration, with the DBA team
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Learnt about cloud infrastructure, and enterprise deployments
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Earned multiple Oracle Cloud Architect Certification
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
            YouTube, Internship and Placement Journey
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Secured internship at KPMG India as an analyst.
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Secured internship in Celebal Tech. as a NodeJS developer.
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Started my YouTube channel a place for tech videos
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Achieved a few 100 subscribers on YouTube
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
            Cloud Computing and DevOps Journey
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Learnt about mobile application development with React Native
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Learnt about production grade deployment of web applications
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Got to know about Docker and DevOps Practices
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Got familiar with AWS, DigitalOcean and Vercel
          </p>
        </div>
      ),
    },
    {
      title: "Late 2022",
      content: (
        <div>
          <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
            Internals of the Computer and Web Development
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Explored Concepts of OS, DBMS and Computer Networks
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Started my journey with React, Tailwind and Bootstrap
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Got introduced to Node.js, Express.js and MongoDB
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Got to know about Git, GitHub and Version Control System
          </p>
        </div>
      ),
    },
    {
      title: "Early 2022",
      content: (
        <div>
          <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
            Introduced to Exciting World of Software Development
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Got interested about Data Structures and Algorithms
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Got familiar with Object Oriented Programming
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Understood how to write clean, optimised and efficient code.
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Got introduced to Web Development with HTML, CSS and JS
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
            Completed 12th Grade
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Scored 87% in my 12th grade exams
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Took up Engineering at Kalinga Institute of Industrial Technology
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Computer Science and Engineering was my major
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Got Introduced to the world of programming through C and C++
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
            Completed 10th Grade
          </p>
          <div className="mb-8">
            <div className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
              ✅ Scored 89% in my 10th grade exams.
            </div>
            <div className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
              ✅ Started Preparing for Competitive Exams in institutions.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2003",
      content: (
        <div>
          <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
            An Engineer was Born
          </p>
          <div className="mb-8">
            <div className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
              🌍 Kolkata, West Bengal, India
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.0,
          ease: "easeInOut",
        }}>
        {/* Radial gradient for the container to give a faded look */}
        <Timeline data={data} />
      </motion.div>
    </div>
  );
}
