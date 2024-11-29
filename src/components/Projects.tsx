"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import ProjectList from "./ProjectList";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Projects() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center rounded-lg ">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      {/* <Boxes /> */}
      <div className="mt-32 mb-24">
        <TextGenerateEffect words={'Explore My Projects'} size="text-4xl text-white relative z-20 text-center mb-2 font-bold"/>
        <TextGenerateEffect words={'Here are the few of the various projects on which I have worked on!'} size="text-center text-xs md:text-xl text-slate-300 relative z-20"/>
      </div>
      <ProjectList/>
    </div>
  );
}
