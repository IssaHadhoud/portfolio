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
    <Link href={`/${locale}`} className="logo-lockup" aria-label="Issa AbuHadhoud — Home">
      <Image
        src="/logo.png"
        alt="Issa AbuHadhoud"
        width={44}
        height={44}
        className="logo-image"
        priority
      />
    </Link>
  );
}
