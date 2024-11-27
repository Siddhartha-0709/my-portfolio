"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import ytBanner from "../app/assets/yt-banner.jpg"
import blogBanner from "../app/assets/blogbanner.png"
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { StarsBackground } from "./ui/stars-background";
import { ShootingStars } from "./ui/shooting-stars";

export function YouTube() {
    return (
        <>
            <div>
            <StarsBackground />
            <StarsBackground />
            <ShootingStars />
            <ShootingStars />
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
                    <CardContainer className="ml-auto">
                        <StarsBackground className="" />
                        <ShootingStars />
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[28rem] rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                My YouTube Channel
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-lg mt-2 dark:text-neutral-300"
                            >
                                Whether you're into JavaScript wizardry, full-stack development, DevOps, or just love staying on top of tech trends, this channel is your go-to destination.
                                Join me as we geek out, learn, and grow together in this fantastic digital realm.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-6">
                                <Image
                                    src={ytBanner}
                                    height={4000}
                                    width={3000}
                                    className="object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <Link href="https://www.youtube.com/@siddharthadotcom">
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="mx-auto px-44 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        View Channel
                                    </CardItem>
                                </Link>
                            </div>
                        </CardBody>
                    </CardContainer>
                    <CardContainer className="mr-auto">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[28rem] rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                My Blog Page
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-lg mt-2 dark:text-neutral-300"
                            >
                                Read my blog posts about React, React Native, full-stack development, DevOps, and more. Stay up-to-date with the latest tech news and insights in this engaging space made exculusive for all tech enthusiasts.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-6">
                                <Image
                                    src={blogBanner}
                                    height={4000}
                                    width={3000}
                                    className="object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                                
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <Link href="/blogs" className="mx-auto px-40 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">View Blog</Link>
                                
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
        </>

    );
}
