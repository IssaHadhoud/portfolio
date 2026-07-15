"use client";

import { useEffect, useState } from "react";

const NAMES = { en: "Issa", ar: "عيسى" };
const LETTER_DELAY = 0.12; // seconds between each letter starting
const LETTER_DURATION = 0.7; // seconds for each letter's own entrance
const HOLD_AFTER_LETTERS = 0.85; // pause once fully written, before exit
const EXIT_DURATION = 0.9; // seconds for the fade/slide-out

export default function SplashScreen({ locale = "en" }) {
  const NAME = NAMES[locale] || NAMES.en;
  const isArabic = locale === "ar";
  const [phase, setPhase] = useState("in"); // "in" -> "out" -> removed
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setMounted(false);
      return;
    }

    // Arabic renders as one connected block (see below), so it only needs
    // its own single entrance duration rather than the per-letter timeline.
    const lettersDone = isArabic
      ? LETTER_DURATION * 1000
      : (NAME.length - 1) * LETTER_DELAY * 1000 + LETTER_DURATION * 1000;
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
  }, [isArabic, NAME]);

  if (!mounted) return null;

  return (
    <div className={`splash-screen${phase === "out" ? " splash-out" : ""}`} aria-hidden="true">
      <div className={`splash-name${isArabic ? " splash-name-arabic" : ""}`}>
        {isArabic ? (
          // Arabic letters are cursive/connected — splitting them into
          // separate spans (like the Latin per-letter animation below)
          // breaks the joined letterforms, so the whole word fades/scales
          // in as a single unit instead.
          <span className="splash-letter splash-word-arabic">{NAME}</span>
        ) : (
          NAME.split("").map((letter, i) => (
            <span
              key={i}
              className="splash-letter"
              style={{ animationDelay: `${i * LETTER_DELAY}s` }}
            >
              {letter}
            </span>
          ))
        )}
      </div>
      <span className="splash-underline" />
    </div>
  );
}
