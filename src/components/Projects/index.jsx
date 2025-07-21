"use client";
import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./components/project";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import Script from "next/script";

const projects = [
  {
    title: "AI Voice Assistant",
    description:
      "An AI-powered voice assistant built with NEXTjs and Gemmini API, achieving 98% voice recognition accuracy with 1.5 second response time.",
    src: "/images/voice.png",
    color: "#000000",
    link: "https://vocalize-ai.vercel.app/",
    techStack: ["NEXT.js", "Gemini API", "Voice Recognition"],
  },
  {
    title: "Pixel Alchemy",
    description:
      "An AI-driven text-to-image generation platform using Gemini API with integrated payment system and real-time image creation capabilities.",
    src: "/images/pixel.png",
    color: "#000000",
    link: "https://github.com/Kanishkk-1/PixelAlchemy",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "OpenAI API"],
  },
  {
    title: "Doodle Space",
    description:
      "A real-time collaborative drawing application built with MERN stack and Socket.io for seamless whiteboard sharing and synchronization.",
    src: "/images/doodle.png",
    color: "#000000",
    link: "https://github.com/Kanishkk-1/DoodleSpace",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
  },
  {
    title: "Agro-Tech Website",
    description:
      "A comprehensive agricultural platform featuring crop recommendations, fertilizer predictions, and CNN-based plant disease identification across 38 classes.",
    src: "/images/agro.png",
    color: "#000000",
    link: "https://github.com/Kanishkk-1/Agro-tech",
    techStack: [
      "React.js",
      "Node.js",
      "Flask",
      "MongoDB",
      "Firebase",
      "Naïve Bayes",
      "Random Forest",
      "CNN",
    ],
  },
  {
    title: "Horizon-Banking Web App",
    description:
      "A comprehensive financial SaaS platform built with Next.js and TypeScript, featuring multi-bank account integration, real-time transactions, and secure fund transfers via Plaid and Dwolla APIs",
    src: "/images/Horizon.png",
    color: "#000000",
    link: "https://banking-jet.vercel.app/",
    techStack: ["NEXTjs", "TypeScript", "Plaid API", "Dwolla API"],
  },
  {
    title: "Gamble Gains",
    description:
      "An engaging gambling platform developed with React.js and Tailwind CSS, featuring interactive games like Dice, Mines, and Hi-Lo with modern responsive design",
    src: "/images/stake.png",
    color: "#8C8C8C",
    link: "https://gamble-gains.vercel.app/",
    techStack: ["React.js"],
  },
  // {
  //   title: "Portfolio",
  //   description:
  //     "A modern, interactive portfolio website showcasing projects with dynamic animations and responsive design.",
  //   src: "/images/portfolio.png",
  //   color: "#EFE8D3",
  //   link: "https://kanishk-chi.vercel.app/",
  //   // techStack: ],
  // },
  {
    title: "Sorting Visualizer",
    description:
      "Educational tool that visualizes various sorting algorithms in real-time, helping users understand algorithmic concepts through interactive demonstrations.",
    src: "/images/sv.png",
    color: "#706D63",
    link: "https://sorting-visualizer-mtis.vercel.app/",
    techStack: ["JavaScript"],
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
      id="work"
    >
      <Script
        async
        src="//embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
      ></Script>
      <h1 className={styles.h1}>Projects</h1>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              description={project.description}
              link={project.link}
              techStack={project.techStack}
              manageModal={manageModal}
              key={index}
            />
          );
        })}
      </div>
      <button
        id="feedback-button"
        data-tf-popup="IIAAy5c2"
        data-tf-opacity="100"
        data-tf-iframe-props="title=Client Details and Project Requirements Form"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
      ></button>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <Image src={`${src}`} width={300} height={0} alt="image" />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </main>
  );
}
