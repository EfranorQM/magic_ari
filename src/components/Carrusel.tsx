import { useState, useEffect } from "react";
import { floresDestacadas } from "../constants/carruselData";

export function Carrusel() {
  const [actual, setActual] = useState(0);
  const total = floresDestacadas.length;

  const flor1 = floresDestacadas[actual];
  const flor2 = floresDestacadas[(actual + 1) % total];
  const flor3 = floresDestacadas[(actual + 2) % total];

  // Cambio automático cada 5 segundos (de 3 en 3 ahora)
  useEffect(() => {
    const interval = setInterval(() => {
      setActual((prev) => (prev + 3) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="relative z-10 py-10 px-4 flex flex-col items-center text-center overflow-hidden">
      {/* Título */}
      <h2
        className="text-4xl sm:text-5xl font-bold text-pink-100 mb-10 drop-shadow-sm"
        style={{ fontFamily: '"Great Vibes", cursive' }}
      >
        Flores destacadas <span className="inline-block animate-bounce">🌸</span>
      </h2>

      {/* Carrusel con 3 columnas */}
      <div
        key={actual}
        className="relative w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animate-slide-left"
      >
        {[flor1, flor2, flor3].map((flor) => (
          <div
            key={flor.id}
            className="w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-lg backdrop-blur-lg flex flex-col 
  bg-gradient-to-br from-white/10 via-white/5 to-transparent 
  border border-white/20 
  ring-2 ring-pink-500/40 hover:ring-4 hover:ring-pink-400 
  hover:drop-shadow-[0_0_12px_rgba(255,192,203,0.6)] 
  transition-all duration-500 hover:scale-[1.04]"

          >
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={flor.src}
                alt={flor.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 text-left text-white">
              <h3 className="text-xl font-bold text-pink-200">{flor.titulo}</h3>
              <p className="text-sm italic text-pink-100 mt-1">
                {flor.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Animación personalizada tipo carrusel horizontal */}
      <style>
        {`
          @keyframes slideLeft {
            0% {
              opacity: 0;
              transform: translateX(60px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-slide-left {
            animation: slideLeft 0.8s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}
