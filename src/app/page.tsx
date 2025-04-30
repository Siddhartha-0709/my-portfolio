import Contact from "@/components/Contact";
import HomeHero from "@/components/HomeHero";
import MyTimeLine from "@/components/MyTimeLine";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Siddhartha | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Siddhartha, a Full Stack Developer skilled in MERN Stack, DevOps and Cloud." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://siddhartha-dev.vercel.app/" />
      </Head>
      <HomeHero />
      <Projects />
      <MyTimeLine />
      <Testimonial />
      <Contact />
    </>
  );
}
