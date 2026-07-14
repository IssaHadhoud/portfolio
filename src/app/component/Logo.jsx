"use client";

import Link from "next/link";

/**
 * Simple text logo — just the name, no box/icon. The big animated
 * entrance happens once in <SplashScreen />; this navbar version just
 * fades in quietly once the splash has finished.
 */
export default function Logo() {
  return (
    <Link href="/" className="logo-lockup" aria-label="Issa AbuHadhoud — Home">
      <span className="logo-word">Issa</span>
    </Link>
  );
}
