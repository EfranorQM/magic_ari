// src/pages/SobreAri.tsx
import { Link } from "react-router-dom";

export function SobreAriPage() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto flex flex-col gap-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-white/70">
        <Link to="/" className="hover:text-pink-400">
          Inicio
        </Link>{" "}
        / <span className="text-pink-300">Sobre Ari</span>
      </nav>

      {/* Hero */}
      <div className="text-center">
        <h1
          className="text-5xl font-script text-pink-300 drop-shadow-md mb-4"
          style={{ fontFamily: '"Great Vibes", cursive' }}
        >
          Sobre Ari
        </h1>
        <p className="text-pink-100 text-lg leading-relaxed">
          Hola, soy Ari, una apasionada del mundo floral y la magia que cada pétalo encierra. 
          Aquí comparto mi amor por las flores, sus historias y cómo pueden iluminar tu día.
        </p>
      </div>

      {/* Perfil */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Imagen */}
        <div className="w-48 h-48 rounded-full overflow-hidden mx-auto md:mx-0 shadow-lg">
          <img
            src="/assets/ari-profile.png"
            alt="Foto de Ari"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Texto */}
        <div className="flex-1 text-white space-y-4">
          <p>
            Desde muy pequeña, las flores han sido mi fuente de inspiración. 
            Estudié Diseño Floral y Botánica, y durante años he explorado jardines silvestres 
            y cultivado especies exóticas en mi propio invernadero.
          </p>
          <p>
            Mi misión con <strong>Magic Ari</strong> es traer esa belleza natural a tu pantalla, 
            presentando flores únicas, historias fascinantes y consejos de cuidado para que 
            cada planta se convierta en un compañero lleno de vida.
          </p>
          <p>
            Cuando no estoy entre macetas y tierra, me encontrarás diseñando nuevas animaciones 
            para la web, aprendiendo sobre IA aplicada al arte botánico, o disfrutando de 
            un buen libro bajo un cerezo en flor.
          </p>
        </div>
      </div>

      {/* Misión y valores */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white space-y-6">
        <h2 className="text-3xl font-script text-pink-300 drop-shadow mb-4">
          Nuestra Misión
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Conectar a las personas con la maravilla de la naturaleza.</li>
          <li>Compartir conocimiento y cuidados para cada especie floral.</li>
          <li>Crear experiencias digitales llenas de encanto y personalidad.</li>
        </ul>
      </div>

      {/* CTA final */}
      <div className="text-center">
        <Link
          to="/contacto"
          className="inline-block px-8 py-3 bg-pink-400 hover:bg-pink-500 text-white rounded-full shadow-lg transition"
        >
          ¡Hablemos! ✉️
        </Link>
      </div>
    </section>
  );
}
