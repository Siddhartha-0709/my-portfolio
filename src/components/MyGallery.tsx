"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export default function MyGallery() {
    return (
        <div className="h-screen rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={data}
                direction="right"
                speed="fast"
            />
        </div>
    );
}

const data = [
    {
        author: "Siddhartha Mukherjee",
        caption: "XYZ",
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        author: "Siddhartha Mukherjee",
        caption: "XYZ",
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        author: "Siddhartha Mukherjee",
        caption: "XYZ",
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        author: "Siddhartha Mukherjee",
        caption: "XYZ",
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        author: "Siddhartha Mukherjee",
        caption: "XYZ",
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
        author: "Siddhartha Mukherjee",
        caption: "XYZ",
        image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
];
