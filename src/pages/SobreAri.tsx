// src/pages/SobreAri.tsx
import React from "react";
import { Link } from "react-router-dom";

export const SobreAriPage: React.FC = () => {
  return (
    <section className="relative z-10 py-12 md:py-16 px-4 max-w-5xl mx-auto flex flex-col gap-14">
      {/* breadcrumbs */}
      <nav className="text-sm text-white/70">
        <Link to="/" className="hover:text-pink-300">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <span className="text-pink-300">Sobre Ari</span>
      </nav>

      {/* hero */}
      <header className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Sobre <span className="text-pink-300">Ari</span>
        </h1>
        <p className="text-pink-100 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Hola, soy Ari, una apasionada del mundo floral y la magia que cada
          pétalo encierra. Aquí comparto mi amor por las flores, sus historias y
          cómo pueden iluminar tu día.
        </p>
      </header>

      {/* perfil */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <figure className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-md">
          <img
            src="/assets/ari-profile.png"
            alt="Foto de Ari"
            className="w-full h-full object-cover"
          />
        </figure>

        <article className="flex-1 text-white space-y-4 text-sm sm:text-base">
          <p>
            Desde muy pequeña, las flores han sido mi fuente de inspiración.
            Estudié Diseño Floral y Botánica, y durante años he explorado
            jardines silvestres y cultivado especies exóticas en mi propio
            invernadero.
          </p>
          <p>
            Mi misión con <strong>Magic Ari</strong> es traer esa belleza
            natural a tu pantalla, presentando flores únicas, historias
            fascinantes y consejos de cuidado para que cada planta se convierta
            en un compañero lleno de vida.
          </p>
          <p>
            Cuando no estoy entre macetas y tierra, me encontrarás diseñando
            nuevas animaciones para la web, aprendiendo sobre IA aplicada al
            arte botánico, o disfrutando de un buen libro bajo un cerezo en
            flor.
          </p>
        </article>
      </section>

      {/* misión / valores */}
      <section className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-md p-8 text-white space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-pink-300">
          Nuestra misión
        </h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Conectar a las personas con la maravilla de la naturaleza.</li>
          <li>Compartir conocimiento y cuidados para cada especie floral.</li>
          <li>
            Crear experiencias digitales llenas de encanto y personalidad.
          </li>
        </ul>
      </section>

      {/* cta */}
      <div className="text-center">
        <Link
          to="/contacto"
          className="inline-block px-6 sm:px-8 py-3 bg-pink-500 hover:bg-pink-400 text-white rounded-full transition"
        >
          ¡Hablemos!
        </Link>
      </div>
    </section>
  );
};
