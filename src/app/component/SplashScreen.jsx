"use client";

import { useEffect, useState } from "react";

const NAME = "Issa";
const LETTER_DELAY = 0.12; // seconds between each letter starting
const LETTER_DURATION = 0.7; // seconds for each letter's own entrance
const HOLD_AFTER_LETTERS = 0.85; // pause once fully written, before exit
const EXIT_DURATION = 0.9; // seconds for the fade/slide-out

export default function SplashScreen() {
  const [phase, setPhase] = useState("in"); // "in" -> "out" -> removed
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setMounted(false);
      return;
    }

    // Total time until the last letter has finished animating in.
    const lettersDone = (NAME.length - 1) * LETTER_DELAY * 1000 + LETTER_DURATION * 1000;
    const startExit = lettersDone + HOLD_AFTER_LETTERS * 1000;

    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => setPhase("out"), startExit);
    const removeTimer = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = "";
    }, startExit + EXIT_DURATION * 1000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className={`splash-screen${phase === "out" ? " splash-out" : ""}`} aria-hidden="true">
      <div className="splash-name">
        {NAME.split("").map((letter, i) => (
          <span
            key={i}
            className="splash-letter"
            style={{ animationDelay: `${i * LETTER_DELAY}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <span className="splash-underline" />
    </div>
  );
}
