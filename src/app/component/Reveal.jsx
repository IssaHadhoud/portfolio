"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal animation wrapper.
 * type: "up" | "left" | "right" | "scale" | "fade"
 * delay: seconds before the animation starts once visible
 */
export default function Reveal({ children, type = "up", delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${visible ? `reveal ${type}` : "reveal-hidden"} ${className}`}
      style={{ animationDelay: visible ? `${delay}s` : undefined }}
    >
      {children}
    </Tag>
  );
}
