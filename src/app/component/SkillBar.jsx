"use client";

import { useEffect, useRef, useState } from "react";

export default function SkillBar({ name, level }) {
  const ref = useRef(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFill(level);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-row-top">
        <span>{name}</span>
        <span style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
          {fill}%
        </span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${fill}%` }} />
      </div>
    </div>
  );
}
