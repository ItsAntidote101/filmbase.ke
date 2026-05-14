"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
  className,
}: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const startTime = useRef<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const numericValue = typeof value === "string" ? parseFloat(value) : value;

  useEffect(() => {
    if (!inView || isNaN(numericValue)) return;

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * numericValue));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDone(true);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, numericValue, duration]);

  if (isNaN(numericValue)) {
    return (
      <span ref={ref} className={className}>
        {prefix}{value}{suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={`relative inline-block ${done ? "stat-bounce" : ""}`}>
      <span className={className}>
        {prefix}{count}{suffix}
      </span>
      <span
        className="absolute left-0 -bottom-1 h-0.5 block rounded-full"
        style={{
          backgroundColor: "#7dd3f0",
          width: done ? "100%" : "0%",
          transition: done ? "width 0.4s ease 0.05s" : "none",
        }}
      />
    </span>
  );
}
