// src/components/Intro.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Flower2, Search, RotateCw } from "lucide-react";

export const Intro: React.FC = () => {
  const features = [
    {
      icon: <Flower2 size={28} className="text-pink-300" />,
      title: "Variedad única",
      desc: "Más de 9 flores seleccionadas para ti.",
    },
    {
      icon: <Search size={28} className="text-pink-300" />,
      title: "Búsqueda ágil",
      desc: "Filtra por nombre o categoría al instante.",
    },
    {
      icon: <RotateCw size={28} className="text-pink-300" />,
      title: "Flip‑cards interactivo",
      desc: "Gira cada tarjeta para ver datos y cuidados.",
    },
  ];

  return (
    <section className="bg-transparent px-4 pt-24 pb-16 relative z-10">
      {/* Encabezado */}
      <header className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Bienvenido a <span className="text-pink-300">Magic Ari</span>
        </h1>
        <p className="text-pink-100 text-base sm:text-lg md:text-xl leading-relaxed">
          En este rincón encantado, cada flor es una historia, cada aroma una
          emoción. Descubre la belleza de lo natural hecha arte.
        </p>

        {/* CTA */}
        <Link
          to="/flores"
          className="inline-block px-6 sm:px-8 py-3 bg-pink-500 hover:bg-pink-400 text-white font-medium rounded-full transition"
        >
          Explorar flores
        </Link>
      </header>

      {/* Tarjetas de características */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map(({ icon, title, desc }) => (
          <article
            key={title}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition hover:-translate-y-1"
          >
            <div className="mb-3">{icon}</div>
            <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
            <p className="text-pink-100 text-sm">{desc}</p>
          </article>
        ))}
      </div>

      {/* Indicador scroll */}
      <div className="mt-14 flex justify-center">
        <span className="text-pink-200 text-2xl animate-fade-bounce">↓</span>
      </div>

      {/* Animación ↓ suave */}
      <style>{`
        @keyframes fadeBounce {
          0%, 100% { opacity: .2; transform: translateY(0); }
          50%      { opacity: .8; transform: translateY(6px); }
        }
        .animate-fade-bounce {
          animation: fadeBounce 1.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
