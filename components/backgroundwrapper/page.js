"use client";

import ParticlesBackground from "../ParticlesBackground/page";

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;