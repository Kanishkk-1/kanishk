"use client";
import React from "react";
import styles from "./style.module.scss";

export default function Project({
  index,
  title,
  description,
  link,
  techStack,
  manageModal,
}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        onMouseEnter={(e) => {
          manageModal(true, index, e.clientX, e.clientY);
        }}
        onMouseLeave={(e) => {
          manageModal(false, index, e.clientX, e.clientY);
        }}
        className={styles.project}
      >
        {/* Description at the top */}
        {description && <p className={styles.description}>{description}</p>}
        <h2>{title}</h2>
        {/* <p>Design & Development</p> */}
        {/* Tech stack below title and description */}
        {techStack && (
          <p className={styles.techStack}>{techStack.join(", ")}</p>
        )}
      </div>
    </a>
  );
}
