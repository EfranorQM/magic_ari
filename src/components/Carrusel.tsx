// src/components/Carrusel.tsx
import React, { useState, useEffect } from "react";
import { floresDestacadas } from "../constants/carruselData";

export const Carrusel: React.FC = () => {
  const [actual, setActual] = useState(0);
  const total = floresDestacadas.length;
  const visibles = [
    floresDestacadas[actual],
    floresDestacadas[(actual + 1) % total],
    floresDestacadas[(actual + 2) % total],
  ];

  useEffect(() => {
    const id = setInterval(() => setActual((prev) => (prev + 3) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section className="relative z-10 py-12 px-4 bg-transparent">
      {/* Título */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-green-900 text-center mb-8">
        Flores Destacadas
        <span className="text-pink-600 ml-2">•</span>
      </h2>

      {/* Grid de tarjetas */}
      <div
        key={actual}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in"
      >
        {visibles.map((flor) => (
          <div
            key={flor.id}
            className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition"
          >
            <div className="aspect-square w-full relative">
              <img
                src={flor.src}
                alt={flor.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-medium text-green-900 mb-2">
                {flor.titulo}
              </h3>
              <p className="text-green-800 text-sm">{flor.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animación slide-in */}
      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
