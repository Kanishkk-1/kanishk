"use client";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Description from "../components/Description";
import Skillsparallax from "../components/Skills-parallax";
// import Overlay from "../components/Overlay";
// import Skills2 from "../components/Skills2";
import SlidingImages from "../components/SlidingImages";
import Contact from "../components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      {/* <Skills /> */}
      {/* <Skills2 /> */}
      {/* <Overlay/> */}
      <Projects />
      <Skillsparallax />
      <SlidingImages />
      <Contact />
    </main>
  );
}
