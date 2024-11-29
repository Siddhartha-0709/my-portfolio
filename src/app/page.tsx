import Contact from "@/components/Contact";
import { HomeHero } from "@/components/HomeHero";
import { MyTimeLine } from "@/components/MyTimeLine";
import Projects from "@/components/Projects";
import { YouTube } from "@/components/YouTube";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Projects/>
      <MyTimeLine/>
      {/* <YouTube/> */}
      <Contact/>
    </>
  );
}
