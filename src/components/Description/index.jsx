"use-client"
import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
// import { useRef } from "react";

// import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";

// import { ScrollTrigger } from "gsap/all";
import { slideUp, opacity } from "./animation";
// import Rounded from "../../common/RoundedButton";
import Script from "next/script";


import { useMediaQuery } from "react-responsive";

export default function Index() {
    
  const phrase =
    "I’m Kanishka Ranjan, a final year undergraduate at NIT Kurukshetra , major in Information Technology, with a passion for web development and scalable technologies. Proficient in C++,JavaScript ,TypeScript ,React.js, Next.js, Node.js, and cloud services like AWS and Docker. Always eager to expand my skills and tackle new challenges, I’m actively seeking lucrative opportunities to leverage my tech expertise and drive impactful projects. Whether it’s through creating seamless web experiences or exploring the future of decentralized applications, I’m excited to contribute to the tech landscape and grow alongside it.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    
    <div ref={description} className={styles.description} id="about">
         {/* <h1 className={styles.h1}>About</h1> */}
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
        {/* <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          Let’s face it, first impressions matter. Your website’s an opportunity
          to wow your audience, so why waste it with bad design? Because brands
          win new fans when they’re brave enough to go beyond their creative
          comfort zone..
        </motion.p> */}
        <div data-scroll data-scroll-speed={0.1}>
        
        </div>
      </div>
    </div>
  );
}
