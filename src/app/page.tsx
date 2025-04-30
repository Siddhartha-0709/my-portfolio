import Contact from "@/components/Contact";
import HomeHero from "@/components/HomeHero";
import MyTimeLine from "@/components/MyTimeLine";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Home() {
  return (
    <>
      <Head>
        <title>Siddhartha | Full Stack Developer</title>
        <meta name="description" content="Explore the portfolio of Siddhartha Mukherjee, a Full Stack Developer proficient in the MERN Stack, DevOps, and Cloud technologies. Currently an Analyst Intern at KPMG India and a student at KIIT University." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://siddhartha-dev.vercel.app/" />
      </Head>
      <Analytics/>
      <SpeedInsights/>
      <HomeHero />
      <Projects />
      <MyTimeLine />
      <Testimonial />
      <Contact />
    </>
  );
}
