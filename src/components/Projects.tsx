"use client";
import React from "react";
import ProjectList from "./ProjectList";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
export default function Projects() {
  const words = "Explore my Projects";
  return (
    <>
      <div className="rounded-md bg-black flex flex-col items-center justify-center relative w-full">
      <ShootingStars/>
      <StarsBackground/>
        <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 mt-32">
          {words}
        </h2>
        <h4 className="relative flex-col md:flex-row z-10 text-xl md:text-2xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 mt-4">Glance through a list of the projects which I have built over the past few years.</h4>
        <ProjectList />
      </div>
    </>
  );
}
