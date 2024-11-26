import Contact from "@/components/Contact";
import { HomeHero } from "@/components/HomeHero";
import { MyTimeLine } from "@/components/MyTimeLine";
import Projects from "@/components/Projects";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Projects/>
      <MyTimeLine/>
      <Contact/>
    </>
  );
}
