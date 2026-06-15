"use client";

import * as React from "react";

type CountUpNumberProps = {
  value: string;
  duration?: number;
};

function parseMetricValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);

  if (!match) {
    return { number: 0, suffix: value };
  }

  return {
    number: Number(match[1]),
    suffix: match[2] ?? "",
  };
}

export function CountUpNumber({ value, duration = 1200 }: CountUpNumberProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [{ number, suffix }] = React.useState(() => parseMetricValue(value));
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayValue(number);
      return;
    }

    let frameId = 0;

    const animate = () => {
      const startTime = performance.now();

      const tick = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setDisplayValue(Math.round(number * easedProgress));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [duration, number]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}
