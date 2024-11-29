"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import ytBanner from "../app/assets/youtube.png"
import blogBanner from "../app/assets/blog.png"

export function YouTube() {
    return (
        <>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-1">
                    <Link href="https://www.youtube.com/@siddharthadotcom">
                        <CardContainer className="ml-auto">
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
                            </CardBody>
                        </CardContainer>
                    </Link>
                    <Link href="/blogs" className="">
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

                                </div>
                            </CardBody>
                        </CardContainer>
                    </Link>
                </div>
            </div>
        </>

    );
}
