"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Picture1 from "../../../public/images/1.jpg";
import Picture2 from "../../../public/images/2.jpg";
import Picture3 from "../../../public/images/3.jpg";
import Lenis from "lenis";
import styles from './style.module.scss';
import { useEffect, useRef } from "react";
import { div } from "three/examples/jsm/nodes/Nodes";

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={styles.skills}>
    <main className="overflow-hidden">
      <div className="h-[10vh]" />
      <div ref={container}>
        <Slide
          src={Picture1}
          direction={"left"}
          left={"-120%"}
          progress={scrollYProgress}
        />
        <Slide
          src={Picture2}
          direction={"right"}
          left={"-25%"}
          progress={scrollYProgress}
        />
        <Slide
          src={Picture3}
          direction={"left"}
          left={"-75%"}
          progress={scrollYProgress}
        />
      </div>
      <div className="h-[10vh]" />
    </main>
    </div>
  );
}

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [200* direction, -200 * direction]
  );
  return (
    <div className={styles.skills}>
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
    </div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className={styles.skills}>
    <div className={"flex gap-5 items-center"}>
      <p className="text-[7.5vw]">react nodejs express mongodb postgresql nextjs docker aws &nbsp;</p>
    </div>
    </div>
  );
};
