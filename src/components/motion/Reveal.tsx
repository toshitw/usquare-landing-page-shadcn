"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

export function Reveal({ delay = 0, className, children }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      className={cn(
        "motion-safe:translate-y-4 motion-safe:opacity-0 motion-safe:transition motion-safe:duration-700 motion-safe:ease-out",
        isVisible && "motion-safe:translate-y-0 motion-safe:opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
}
