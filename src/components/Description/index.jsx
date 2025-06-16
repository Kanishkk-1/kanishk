"use-client";
import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import { slideUp, opacity } from "./animation";
import Script from "next/script";
import { useMediaQuery } from "react-responsive";

export default function Index() {
  const desktopPhrase =
    "I'm Kanishka Ranjan, a B.Tech graduate from NIT Kurukshetra, major in Information Technology, with a passion for web development and scalable technologies. Proficient in C++,JavaScript ,TypeScript ,React.js, Next.js, Node.js, and cloud services like AWS and Docker. Always eager to expand my skills and tackle new challenges, I'm actively seeking lucrative opportunities to leverage my tech expertise and drive impactful projects. Whether it's through creating seamless web experiences or exploring the future of decentralized applications, I'm excited to contribute to the tech landscape and grow alongside it.";

  const mobilePhrase =
    "Passionate backend developer and B.Tech IT graduate from NIT Kurukshetra. Specializing in large-scale applications using JS, TS, Python, C++, MERN stack, NEXT.js and cloud technologies. Experienced in machine learning, data visualization, and creating impactful software solutions. Driven by curiosity and committed to advancing the IT field through innovative problem-solving.";

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const phrase = isMobile ? mobilePhrase : desktopPhrase;

  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description} id="about">
      <Script
        async
        src="//embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
      ></Script>

      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <div data-scroll data-scroll-speed={0.1}></div>
      </div>
    </div>
  );
}
