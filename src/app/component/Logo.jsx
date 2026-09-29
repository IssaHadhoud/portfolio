"use client";

import Link from "next/link";
import Image from "next/image";

/**
 * Image logo — the "Issa" wordmark shield. The big animated
 * entrance happens once in <SplashScreen />; this navbar version just
 * fades in quietly once the splash has finished.
 */
export default function Logo({ locale = "en" }) {
  return (
    <Link href={`/${locale}`} className="logo" aria-label="Home">
      <h4>Issa</h4>
    </Link>
  );
}
