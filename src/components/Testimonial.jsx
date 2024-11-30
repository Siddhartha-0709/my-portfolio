"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import preenon from "@/app/assets/preenon.jpeg"
import sayan from "@/app/assets/sayan.jpeg"
import sounak from "@/app/assets/sounak.jpg"
import { TextGenerateEffect } from "./ui/text-generate-effect";
export default function Testimonial() {
    const testimonials = [
        {
            quote:
                "Siddhartha is a skilled developer with a strong work ethic and a commitment to excellence. He excels in addressing complex technical challenges and is a valuable team player.",
            name: "Preenon Saha",
            designation: "Upcoming Software Engineer at LTI Mindtree",
            src: preenon,
        },
        {
            quote:
                "Siddhartha is a diligent and innovative developer with exceptional skills. He consistently delivers high-quality work and is a great guy to work with.",
            name: "Sayan Majumder",
            designation: "Upcoming Analyst at PwC India",
            src: sayan,
        },
        {
            quote:
                "Siddhartha is a true professional who brings a wealth of knowledge and creativity to every project. His ability to understand complex requirements and translate them into intuitive, high-performing applications is remarkable.",
            name: "Sounak Jyoti",
            designation: "Upcoming Software Engineer at MathCo.",
            src: sounak,
        },
    ];
    return (
        <>
            {/* <h1 className="text-4xl text-white relative z-20 text-center mb-2 font-bold mt-20">Testimonials</h1>
            <h1 className="text-center text-xs md:text-xl text-slate-300 relative z-20">Here's what my peers have to say about me!</h1>
            <AnimatedTestimonials testimonials={testimonials} /> */}
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}>
                <div className="w-full h-full flex flex-col bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative items-center justify-center">
                    <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                    <div className="pt-10 pb-24">
                        <TextGenerateEffect words={'Testimonials'} size="text-4xl text-white relative z-20 text-center mb-2 font-bold" />
                        <TextGenerateEffect words={'Here is what my peers have to say about me!'} size="text-center text-xs md:text-xl text-slate-300 relative z-20" />
                    </div>
                    <AnimatedTestimonials testimonials={testimonials} />
                </div>
            </motion.div>
        </>
    );
}


