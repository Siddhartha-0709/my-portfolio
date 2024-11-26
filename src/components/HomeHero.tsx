"use client";
import React from "react";
import Image from "next/image";
import profileImage from "../app/assets/profile.png";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/button";

import {FaGithub,  FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { StarsBackground } from "./ui/stars-background";
import { ShootingStars } from "./ui/shooting-stars";

export function HomeHero() {
    const words = `Siddhartha Mukherjee`
    return (
        <>  
            <div className="h-[38rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <ShootingStars/>
            <StarsBackground/>
                <TextGenerateEffect className="absolute top-10 left-10" words={words} />
                <div className="w-full absolute inset-0 h-screen">
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <BackgroundGradient className="rounded-[22px] p-8 dark:bg-zinc-900" 
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold flex-1">
                                Siddhartha Mukherjee
                            </h1>
                            <p className="text-gray-400 text-md mt-1">Software Engineer | Architecting the World with Lines of Code</p>
                            <p className="text-gray-400 text-sm mt-8">
                                <FaMapMarkerAlt size={18} className="inline-block mr-1" color="red" />
                                Kolkata, India
                            </p>
                        </div>
                        <Image
                            src={profileImage}
                            className="rounded-full w-32 h-32 ml-10"
                            alt="profile"
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mt-4">Skills and Interests</h1>
                        <div className="flex flex-wrap items-center mt-3 gap-0 w-1/5">
                            <div className="flex ">
                                <Button className="flex items-center bg-zinc-800 hover:bg-zinc-700 w-20 mr-1">
                                    <FaReact size={24} color="#61DAFB" className="inline-block" />
                                    <span className="text-white text-left">React.js</span>
                                </Button>
                                <Button className="flex items-center bg-zinc-800 hover:bg-zinc-700 w-28 mr-1">
                                    <FaReact size={24} color="#61DAFB" className="inline-block" />
                                    <span className="text-white text-left">React Native</span>
                                </Button>
                                <Button className="flex items-center bg-zinc-800 hover:bg-zinc-700 w-20 mr-3">
                                    <SiNextdotjs size={24} color="#FFFFFF" className="inline-block" />
                                    <span className="text-white text-left">Next.js</span>
                                </Button>
                            </div>
                            <div className="flex mt-2">
                                <Button className="flex items-center bg-zinc-800 hover:bg-zinc-700 w-26 mr-1">
                                    <SiExpress size={24} color="FFFFFF" className="inline-block" />
                                    <span className="text-white text-left">Express.js</span>
                                </Button>
                                <Button className="flex items-center bg-zinc-800 hover:bg-zinc-700 w-24 mr-1">
                                    <SiMongodb size={24} color="green" className="inline-block" />
                                    <span className="text-white text-left">MongoDB</span>
                                </Button>
                                <Button className="flex items-center bg-zinc-800 hover:bg-zinc-700 w-20 mr-1">
                                    <FaNodeJs size={24} color="green" className="inline-block" />
                                    <span className="text-white text-left">Node.js</span>
                                </Button>
                            </div>
                            <div className="flex mt-2">
                                <Button className="flex items-center bg-zinc-800 hover:bg-zinc-700 w-20 mr-1">
                                    <FaDocker size={24} color="#2496ED" className="inline-block" />
                                    <span className="text-white text-left">Docker</span>
                                </Button>
                                <Button className="flex items-center bg-zinc-800 hover:bg-zinc-700 w-20 mr-1">
                                    <FaAws size={24} color="#FF9900" className="inline-block" />
                                    <span className="text-white text-left">AWS</span>
                                </Button>
                                <Button className="flex items-center bg-zinc-800 hover:bg-zinc-700 w-22  mr-1">
                                    <FaLinux size={24} color="#F0DB4F" className="inline-block" />
                                    <span className="text-white text-left">Linux</span>
                                </Button>
                                <Button className="flex items-center bg-zinc-800 hover:bg-zinc-700 w-20  mr-1">
                                    <FaGithub size={24} color="#FFFFFF" className="inline-block" />
                                    <span className="text-white text-left">GitHub</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </BackgroundGradient>
            </div>
        </>
    );
}
