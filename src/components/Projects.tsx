"use client";
import React from "react";
import ProjectList from "./ProjectList";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Projects() {
  return (
    <div className="w-full bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="pt-10 pb-24">
        <TextGenerateEffect words={'Explore My Projects'} size="text-4xl text-white relative z-20 text-center mb-2 font-bold"/>
        <TextGenerateEffect words={'Here are the few of the various projects on which I have worked on!'} size="text-center text-xs md:text-xl text-slate-300 relative z-20"/>
      </div>
      <ProjectList/>
    </div>
  );
}
