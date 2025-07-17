import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import "./style.css";

const MyComponent = () => {
    
    
  useEffect(() => {
    const myText = new SplitType(".mytext");

    gsap.to(".char", {
      y: 0,
      stagger: 0.1,
      delay: 2.5,
      duration: 0.3,
    });
  }, []);

  return (
    <div className="landing">
      <header className="header">
        <h1 className="mytext">Kanishk(a)</h1>
      </header>
    </div>
  );
};

export default MyComponent;
