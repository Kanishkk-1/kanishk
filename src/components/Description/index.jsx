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
    "Hi I'm Kanishk .a Full-Stack Developer specializing in building modern and scalable web applications using React, NEXTjs, and TypeScript. With a strong foundation in both front-end and back-end development, I deliver robust solutions characterized by clean interfaces and efficient data management. On the back-end, I excel in NEXTjs ,Node.js, Express.js, MongoDB, and PostgreSQL, with extensive experience working with  REST APIs ";
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
