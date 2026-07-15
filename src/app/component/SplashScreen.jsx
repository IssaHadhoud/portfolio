"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LOGO_IN_DURATION = 0.7; // seconds for the logo's entrance
const HOLD_AFTER_LOGO = 0.85; // pause once fully shown, before exit
const EXIT_DURATION = 0.9; // seconds for the fade/slide-out

export default function SplashScreen({ locale = "en" }) {
  const [phase, setPhase] = useState("in"); // "in" -> "out" -> removed
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setMounted(false);
      return;
    }

    const startExit = LOGO_IN_DURATION * 1000 + HOLD_AFTER_LOGO * 1000;

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
      <Image
        src="/logo.png"
        alt="Issa AbuHadhoud"
        width={520}
        height={512}
        className="splash-logo"
        priority
      />
    </div>
  );
}
