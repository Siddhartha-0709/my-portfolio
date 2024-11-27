import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export function MyTimeLine() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
            YouTube, Internship and Placement Journey
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
          ✅ Secured internship in Celebal Technologies as a NodeJS developer.
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
          ✅ Secured internship at an MNC as an analyst.
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
          ✅ Started my YouTube channel a place for tech videos
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
          ✅ Still the year has not yet ended 😜 . . . 
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
            ✅ Learnt about production grade deployment of web apps and backend
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
            ✅ Got interested about Operating Systems, Database Management Systems
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
            ✅ Got interested about the subject of Data Structures and Algorithms.
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Got familiar with Object Oriented Programming
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Understood how to write clean, optimised and efficient code.
          </p>
          <p className="text-lg flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
            ✅ Got introduced to Web Development with HTML, CSS and JavaScript
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
            ✅ Took up Engineering at Kalinga Institute of Industrial Technology, Odisha
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
    <>
      <div className="rounded-md bg-black flex flex-col items-center justify-center relative w-full">
      <ShootingStars/>
      <StarsBackground/>
        <h2 className="relative flex-col md:flex-row z-10 text-2xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 mt-32">
          Changelog from my Journey and Updates
        </h2>
        <h4 className="relative flex-col md:flex-row z-10 text-xl md:text-xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 mt-4">This is the list of updates which I have made over the past few years.</h4>
      <Timeline data={data} />    
      </div>
      <ShootingStars/>
      <ShootingStars/>
      <StarsBackground/>
      <StarsBackground/>
    </>

  );
}
