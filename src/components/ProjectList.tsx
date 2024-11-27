"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export default function ProjectList() {
  return (
    <>
    <div className="md:h-[40rem] max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
        <ShootingStars/>
        <ShootingStars/>
        <StarsBackground/>
        <StarsBackground/>
    </div>
    </>
  );
}
export const projects = [
  {
    title: "CompileX",
    description:
      "An online compiler that allows users to write and execute code in a wide range of programming languages. It utlizes the power of Judge0 to provide a powerful and user-friendly environment for coding and problem-solving.",
    link: "https://compile-x.vercel.app",
  },
  {
    title: "Dashabhuja",
    description:
      "A women's safety app inspired by the goddess Durga. It offers emergency SOS, alert notifications for trusted contacts, anonymous crime reporting, and a community space for women to share stories.",
    link: "https://dashabhuja.vercel.app/",
  },
  {
    title: "PlantIT",
    description:
      "A platform that seamlessly merges buying and selling with cutting-edge AI technology. Utilizes the power of Gemini Vision Pro to provide personalized recommendations and AI based plant care tips.",
    link: "https://github.com/Siddhartha-0709/PlantIt-FrontEnd",
  },  
  {
    title: "Seva4You",
    description:
      "A comprehensive health and welfare platform enabling users to schedule doctor appointments, book nearby ambulances with live tracking, read health blogs, and facilitating doctors to manage appointments and conduct video consultations.",
    link: "https://github.com/Siddhartha-0709/Seva4You-Hack4Bengal",
  },
  {
    title: "Rentify",
    description:
      "A simple project that aims to simplify the process of finding the perfect property by offering a user-friendly interface and an extensive database of property listings.",
    link: "https://rentify-sm.vercel.app/",
  },
  {
    title: "Spaces for Developers",
    description:
      "A community of developers who are passionate about coding and building cool stuff. A platform for tech-enthusiasts to connect, learn, and share knowledge.",
    link: "https://spaces.siddharthapro.in",
  },
];
