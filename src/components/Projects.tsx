// "use client";
// import React from "react";
// import { PinContainer } from "./ui/3d-pin";

// export default function Projects() {
//   return (
// <div className="h-[40rem] w-full flex items-center justify-center ">
//   <PinContainer
//     title="/ui.aceternity.com"
//     href="https://twitter.com/mannupaaji"
//   >
//     <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
//       <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
//         Aceternity UI
//       </h3>
//       <div className="text-base !m-0 !p-0 font-normal">
//         <span className="text-slate-500 ">
//           Customizable Tailwind CSS and Framer Motion Components.
//         </span>
//       </div>
//       <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
//     </div>
//   </PinContainer>
// </div>
//   );
// }


"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { PinContainer } from "./ui/3d-pin";
import ProjectList from "./ProjectList";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Projects() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center rounded-lg ">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="mt-32 mb-24">
        <TextGenerateEffect words={'Explore My Projects'} size="text-4xl text-white relative z-20 text-center mb-2 font-bold"/>
        <TextGenerateEffect words={'Here are the few of the various projects on which I have worked on!'} size="text-center text-xs md:text-xl text-slate-300 relative z-20"/>
      </div>
      <ProjectList/>
    </div>
  );
}
