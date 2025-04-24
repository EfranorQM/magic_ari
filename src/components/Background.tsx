import { useEffect, useState } from "react";

type Particle = {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: number;
};

type Petal = {
  id: number;
  left: string;
  size: number;
  delay: number;
  duration: number;
};

export function Background() {
  const [stars, setStars] = useState<Particle[]>([]);
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Genera estrellas (partículas pequeñas y brillantes)
    const genStars = () =>
      setStars(
        Array.from({ length: 20 }, (_, i) => ({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: Math.random() * 3 + 1, // 1–4px
          delay: Math.random() * 2, // 0–2s
        }))
      );

    // Genera pétalos que caen lentamente
    const genPetals = () =>
      setPetals(
        Array.from({ length: 8 }, (_, i) => ({
          id: i,
          left: `${Math.random() * 100}%`,
          size: Math.random() * 30 + 20, // 20–50px
          delay: Math.random() * 5, // 0–5s
          duration: Math.random() * 10 + 10, // 10–20s
        }))
      );

    genStars();
    genPetals();

    const starInterval = setInterval(genStars, 8000);
    const petalInterval = setInterval(genPetals, 15000);

    return () => {
      clearInterval(starInterval);
      clearInterval(petalInterval);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Estrellas que parpadean */
        @keyframes star-twinkle {
          0%,100% { opacity: 0.2; transform: scale(1); }
          50%     { opacity: 1;   transform: scale(1.5); }
        }
        .star {
          animation: star-twinkle 5s ease-in-out infinite;
        }

        /* Pétalos que flotan hacia abajo y giran */
        @keyframes petal-fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
        .petal {
          animation-name: petal-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* 1) Fondo base degradado (z-0) */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-fuchsia-900 to-rose-900 opacity-90 z-0" />

        {/* 2) Luna semitransparente (z-10) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 z-10">
          <img
            src="/src/assets/moon.png"
            alt="Luna"
            className="w-64 h-64 opacity-30"
          />
        </div>

        {/* 3) Estrellas brillantes (z-20) */}
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute star rounded-full bg-white"
            style={{
              zIndex: 20,
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}

        {/* 4) Pétalos flotando (z-15) */}
        {petals.map((p) => (
          <img
            key={p.id}
            src="/src/assets/petal.png"
            alt="Pétalo flotando"
            className="absolute petal opacity-80"
            style={{
              zIndex: 15,
              left: p.left,
              width: `${p.size}px`,
              height: "auto",
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
