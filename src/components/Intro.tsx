// src/components/Intro.tsx
import { Link } from "react-router-dom";

export function Intro() {
  return (
    <section className="relative z-10 px-6 pt-10 pb-4 sm:pt-12 sm:pb-6 text-center flex flex-col items-center">
      <div className="max-w-3xl">
        <h2
          className="text-5xl sm:text-6xl font-bold text-pink-300 drop-shadow-md leading-tight tracking-wide mb-2 sm:mb-4 animate-fade-up"
          style={{ fontFamily: '"Great Vibes", cursive' }}
        >
          Bienvenido a Magic Ari
        </h2>

        <p className="text-pink-100 text-lg sm:text-xl font-light leading-relaxed mb-6 animate-fade-up delay-200">
          En este rincón encantado, cada flor es una historia, cada aroma una emoción.
          Descubre la belleza de lo natural hecha arte. 🌸
        </p>

        {/* 1. CTA Button */}
        <Link
          to="/flores"
          className="inline-block px-8 py-3 bg-pink-400 hover:bg-pink-500 text-white font-semibold rounded-full shadow-lg backdrop-blur-sm transition animate-fade-up delay-500"
        >
          Explorar Flores
        </Link>
      </div>

      {/* 2. Feature Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl animate-fade-up delay-700">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-white">
          <div className="text-4xl mb-2">🌼</div>
          <h3 className="font-semibold mb-1">Variedad Única</h3>
          <p className="text-sm">Más de 9 flores seleccionadas para ti.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-white">
          <div className="text-4xl mb-2">🔍</div>
          <h3 className="font-semibold mb-1">Búsqueda Ágil</h3>
          <p className="text-sm">Filtra por nombre o categoría al instante.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-white">
          <div className="text-4xl mb-2">🔄</div>
          <h3 className="font-semibold mb-1">Flip-Cards Interactivo</h3>
          <p className="text-sm">Gira cada tarjeta para ver datos y cuidados.</p>
        </div>
      </div>

      {/* 3. Scroll Indicator */}
      <div className="mt-16 animate-bounce text-pink-200 text-3xl">
        ↓
      </div>

      {/* Animaciones */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
          opacity: 0;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </section>
  );
}
