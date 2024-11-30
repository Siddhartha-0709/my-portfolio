import Contact from "@/components/Contact";
import HomeHero from "@/components/HomeHero";
import MyTimeLine from "@/components/MyTimeLine";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Projects />
      <MyTimeLine />
      <Testimonial />
      <Contact />
    </>
  );
}
