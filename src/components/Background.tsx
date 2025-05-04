// src/components/Background.tsx
import React, { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

export const Background: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const genPetals = () =>
      setPetals(
        Array.from({ length: 4 }, (_, i) => ({
          id: i,
          left: `${Math.random() * 100}%`,
          size: Math.random() * 24 + 18,
          duration: Math.random() * 8 + 10,
          delay: Math.random() * 4,
        }))
      );

    genPetals();
    const id = setInterval(genPetals, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* 1) Fondo pastel liso */}
      <div className="absolute inset-0 bg-[#EAF3E0]" />

      {/* 2) Ruido muy sutil */}
      <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-5 mix-blend-overlay" />

      {/* 3) Pétalos flotando */}
      {petals.map((p) => (
        <img
          key={p.id}
          src="/assets/petal.svg"
          alt=""
          className="absolute top-[-10%] opacity-70 will-change-transform"
          style={{
            left: p.left,
            width: `${p.size}px`,
            animation: `petalFall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* 4) Animación */}
      <style>{`
        @keyframes petalFall {
          0%   { transform: translateY(0) rotate(0deg); opacity: 0; }
          10%  { opacity: 0.7; }
          100% { transform: translateY(105vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
