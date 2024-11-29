import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";
import { HoverEffect } from "./ui/card-hover-effect";
import dashabhuja from "../app/assets/dashabhuja.png";
import compilex from "../app/assets/compilex.png";
import seva4you from "../app/assets/sava4you.png";
import spaces from "../app/assets/spaces.png";
import rentify from "../app/assets/rentify.png";
import plantit from "../app/assets/plantit.png";
export default function ProjectList() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-32 md:gap-0">
        {projects1.map((project) => (
          <div className="w-full flex items-center justify-center "
          key={project.title}
          >
            <PinContainer
              title={project.link}
              href={project.link}
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[24rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    {project.description}
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1280}
                    height={1280}
                    className="w-full h-[1280px * 3/4] object-cover rounded-lg"
                  />
                </div>

              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-32 mt-28 gap-32 md:gap-0">
        {projects2.map((project) => (
          <div className="w-full flex items-center justify-center "
          key={project.title}
          >
            <PinContainer
              title={project.link}
              href={project.link}
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[24rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    {project.description}
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1280}
                    height={1280}
                    className="w-full h-[1280px * 3/4] object-cover rounded-lg border-3 border-white"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </>
  );
}
export const projects1 = [
  {
    title: "CompileX",
    description:
      "A platform where users can write and execute code in a range of programming languages, utilizing Judge0 to provide a user-friendly environment for coding.",
    link: "https://compile-x.vercel.app",
    image: compilex,
  },
  {
    title: "Dashabhuja",
    description:
      "A women's safety app offers emergency SOS, alert notifications for trusted contacts, anonymous crime reporting, and a community space for to share stories.",
    link: "https://dashabhuja.vercel.app/",
    image: dashabhuja,
  },
  {
    title: "PlantIT",
    description:
      "A platform that merges plant commerce with cutting-edge AI technology. Utilizes the power of Gemini Vision Pro to provide suggestions and AI based plant care tips.",
    link: "https://github.com/Siddhartha-0709/PlantIt-FrontEnd",
    image: plantit,
  },
];

export const projects2 = [
  {
    title: "Seva4You",
    description:
      "A health and welfare platform enabling users to schedule doctor appointments, have live consultations with doctorsand book nearby ambulances.",
    link: "https://github.com/Siddhartha-0709/Seva4You-Hack4Bengal",
    image: seva4you,
  },
  {
    title: "Rentify",
    description:
      "A simple project that aims to simplify the process of finding the perfect property by offering a user-friendly interface and an extensive database of property listings.",
    link: "https://rentify-sm.vercel.app/",
    image: rentify,
  },
  {
    title: "Spaces for Developers",
    description:
      "A community of developers who are passionate about coding and building cool stuff. A platform for tech-enthusiasts to connect, learn, and share knowledge.",
    link: "https://spaces.siddharthapro.in",
    image: spaces,
  },
]