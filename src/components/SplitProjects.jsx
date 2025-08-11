import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./SplitProjects.css";


export default function SplitProjects () {
  const proRef = useRef(null);
  const jectsRef = useRef(null);
  const middleDivsRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({delay: 3});

    tl.to(proRef.current, {
      x: -120,
      duration: 0.8,
      ease: "power4.inOut"
    }).to(jectsRef.current, 
      {
        x: 120,
        duration: 0.8,
        ease: "power4.out"
    },
    "<" //start at the same time as prev animation
  ).fromTo(middleDivsRef.current, { width: 0 }, { width: "auto", duration: 0.8 })
  .fromTo(
    boxesRef.current,
    {opacity: 0, scale: 0.8},
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out(1.7)"
    },
    "-=0.4" //start slightly before text finishes moving
  );
      
  }, []);

  return (
    <div className="projects-container">
      <span ref={proRef} className="pro" style={styles.projectsText}>PRO</span>

      <div className="middle-divs" ref={middleDivsRef}>
        {["div1", "div2", "div3", "div4"].map((d, i) => (
          <div
            key={i}
            ref={(el) => (boxesRef.current[i] = el)}
            className="box"
          >
            {d}
          </div>
        ))}
      </div>

      <span ref={jectsRef} className="jects" style={styles.projectsText}>JECTS</span>
    </div>
  );
}

const styles = {
  projectsText: {
    fontFamily: "'Inria Sans', sans-serif"
  }
};