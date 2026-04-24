import React from "react";
import Particles from "react-tsparticles";

function ParticlesBg() {
  return (
    <Particles
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#020617" },
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          move: { speed: 1 },
          links: { enable: true, color: "#22d3ee" },
        },
      }}
    />
  );
}

export default ParticlesBg;