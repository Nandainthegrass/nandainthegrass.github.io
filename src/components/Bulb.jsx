import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Bulb.css";

export default function Bulb({ onFinish }) {
  const bulbRef = useRef(null);
  const overlayRef = useRef(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onFinish // callback when intro ends
    });

    tl.fromTo(
      bulbRef.current,
      { y: -200 },
      { y: 0, duration: 1.2, ease: "bounce.out" }
    )
      .add(() => setLit(true), "+=0.5") // wait 0.5s then light up
      .to(overlayRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, "+=0.3")
      .to(bulbRef.current, {
        y: -200,
        duration: 0.8,
        ease: "power2.in"
      }, "-=0.5")
      .to(overlayRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          overlayRef.current.style.display = "none";
        }
      }, "+=0.3");
  }, [onFinish]);

  return (
    <div className="overlay" ref={overlayRef}>
      <svg
        ref={bulbRef}
        className={`bulb ${lit ? "lit" : ""}`}
        viewBox="0 0 100 200"
        width="100"
      >
        {/* Wire */}
        <line x1="50" y1="0" x2="50" y2="40" stroke="white" strokeWidth="2" />

        {/* Bulb glass */}
        <circle cx="50" cy="100" r="30" className="glass" />

        {/* Bulb base */}
        <rect x="40" y="70" width="20" height="15" fill="gray" />
      </svg>
    </div>
  );
}
