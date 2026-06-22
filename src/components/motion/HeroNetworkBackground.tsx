"use client";

import * as React from "react";

const nodes = [
  [118, 440],
  [320, 298],
  [506, 340],
  [704, 416],
  [978, 328],
  [1224, 210],
  [1372, 244],
  [168, 176],
  [592, 124],
  [1020, 174],
  [596, 500],
  [1080, 438],
  [1206, 70],
];

export function HeroNetworkBackground() {
  const backgroundRef = React.useRef<HTMLDivElement>(null);
  const frameRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const background = backgroundRef.current;

    if (!background) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionQuery.matches) {
      background.style.setProperty("--hero-x", "50%");
      background.style.setProperty("--hero-y", "42%");
      background.style.setProperty("--hero-tilt-x", "0deg");
      background.style.setProperty("--hero-tilt-y", "0deg");
      return;
    }

    const updatePointer = (event: PointerEvent) => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = window.requestAnimationFrame(() => {
        const rect = background.getBoundingClientRect();
        const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
        const y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);

        background.style.setProperty("--hero-x", `${(x * 100).toFixed(2)}%`);
        background.style.setProperty("--hero-y", `${(y * 100).toFixed(2)}%`);
        background.style.setProperty("--hero-tilt-x", `${((0.5 - y) * 4).toFixed(2)}deg`);
        background.style.setProperty("--hero-tilt-y", `${((x - 0.5) * 5).toFixed(2)}deg`);
      });
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      window.removeEventListener("pointermove", updatePointer);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="hero-network pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-cursor-glow absolute inset-0" />
      <div className="hero-depth-wash absolute inset-0" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="networkGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#11B7E9" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#0E85A2" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#000322" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="networkLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#11B7E9" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#11B7E9" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#055A8F" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="networkSweep" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#11B7E9" stopOpacity="0" />
            <stop offset="48%" stopColor="#11B7E9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#11B7E9" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="1440" height="760" fill="#000322" />
        <g className="network-depth">
          <circle className="network-glow network-glow-one" cx="270" cy="170" r="330" fill="url(#networkGlow)" />
          <circle className="network-glow network-glow-two" cx="1180" cy="370" r="360" fill="url(#networkGlow)" />
        </g>

        <g className="network-lines" fill="none" stroke="url(#networkLine)" strokeWidth="1.4">
          <path d="M72 478 C235 352 355 302 506 340 S811 466 978 328 1244 186 1372 244" />
          <path d="M168 176 C337 220 465 198 592 124 S846 58 1020 174 1241 332 1394 280" />
          <path d="M52 612 C242 560 427 585 596 500 S899 346 1080 438 1278 550 1418 490" />
          <path d="M330 708 C398 556 436 404 612 350 S820 244 940 104" />
          <path d="M872 720 C836 568 898 456 1024 372 S1192 224 1206 70" />
        </g>

        <g className="network-sweeps" fill="none" stroke="url(#networkSweep)" strokeWidth="2">
          <path d="M72 478 C235 352 355 302 506 340 S811 466 978 328 1244 186 1372 244" />
          <path d="M52 612 C242 560 427 585 596 500 S899 346 1080 438 1278 550 1418 490" />
        </g>

        <g className="network-nodes" fill="#11B7E9">
          {nodes.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" />
          ))}
        </g>
      </svg>
    </div>
  );
}
