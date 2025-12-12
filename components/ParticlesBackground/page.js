"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                background: {
                    color: {
                        value: "transparent", // Transparent so black body shows through
                    },
                },
                particles: {
                    number: {
                        value: 40, // Reduced number for subtle effect
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: "#ffffff", // White particles for black background
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.08, // Very low opacity for subtle effect
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.05,
                            sync: false,
                        },
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        random: true,
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.05, // Very faint connections
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.5, // Slow movement for subtle effect
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.1,
                            },
                        },
                        push: {
                            quantity: 4,
                        },
                    },
                },
                detectRetina: true,
            }}
            className="fixed inset-0 -z-10"
        />
    );
};

export default ParticlesBackground;