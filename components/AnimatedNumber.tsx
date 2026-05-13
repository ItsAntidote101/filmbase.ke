"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
}: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
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
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, numericValue, duration]);

  if (isNaN(numericValue)) {
    return (
      <span ref={ref}>
        {prefix}
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
