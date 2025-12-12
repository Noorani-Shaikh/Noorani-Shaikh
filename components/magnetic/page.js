"use client";

import { useRef } from "react";

export default function Magnetic({ children, strength = 0.4 }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const magnet = ref.current;
    const rect = magnet.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    magnet.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block transition-transform duration-300 ease-out"
    >
      {children}
    </div>
  );
}
