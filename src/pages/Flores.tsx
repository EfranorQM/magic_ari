// src/pages/Flores.tsx
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { floresDestacadas } from "../constants/carruselData";

export function FloresPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("A-Z");

  // Extraer categorías únicas
  const categories = useMemo(() => {
    const cats = new Set<string>();
    floresDestacadas.forEach((f) => f.categories?.forEach((c) => cats.add(c)));
    return ["All", ...Array.from(cats)];
  }, []);

  // Filtrar por búsqueda y categoría
  const filtered = useMemo(
    () =>
      floresDestacadas.filter((f) => {
        const text = (f.titulo + f.descripcion).toLowerCase();
        const matchesQuery = text.includes(query.toLowerCase());
        const matchesCategory =
          selectedCategory === "All" ||
          f.categories?.includes(selectedCategory);
        return matchesQuery && matchesCategory;
      }),
    [query, selectedCategory]
  );

  // Ordenar resultados
  const sorted = useMemo(() => {
    const arr = [...filtered];
    if (sortOrder === "A-Z") {
      arr.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (sortOrder === "Z-A") {
      arr.sort((a, b) => b.titulo.localeCompare(a.titulo));
    } else if (sortOrder === "Novedades") {
      arr.reverse();
    }
    return arr;
  }, [filtered, sortOrder]);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* CSS para flip-card */}
      <style>{`
        .flip-card {
          aspect-ratio: 1 / 1;
          width: 100%;
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
          background: rgba(255,255,255,0.1);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>

      {/* Breadcrumbs */}
      <nav className="text-sm text-white/70 mb-4">
        <Link to="/" className="hover:text-pink-400">
          Inicio
        </Link>{" "}
        / <span className="text-pink-300">Flores</span>
      </nav>

      {/* Título + Controles */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
        <h2 className="text-4xl font-script text-pink-300 drop-shadow-md">
          Todas Nuestras Flores
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Buscador */}
          <input
            type="text"
            placeholder="🔍 Buscar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 rounded-full bg-white/10 placeholder-white/60 text-white backdrop-blur-sm focus:bg-white/20 transition"
          />

          {/* Categorías */}
          <div className="relative w-full sm:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none w-full px-4 py-2 pr-10 bg-white/10 border border-white/20 text-white rounded-full backdrop-blur-sm focus:bg-white/20 transition"
            >
              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                  className="bg-purple-900 text-white"
                >
                  {cat}
                </option>
              ))}
            </select>
            {/* Flecha */}
            <svg
              className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Ordenado */}
          <div className="relative w-full sm:w-auto">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="
      appearance-none
      w-full sm:w-auto
      px-4 py-2 pr-10
      bg-purple-900/40
      border border-white/30
      text-white
      rounded-full
      backdrop-blur-sm
      focus:bg-purple-900/60
      focus:outline-none focus:ring-2 focus:ring-pink-300/50
      transition
    "
            >
              <option className="bg-purple-900/60 text-white" value="A-Z">
                Alfabético A–Z
              </option>
              <option className="bg-purple-900/60 text-white" value="Z-A">
                Alfabético Z–A
              </option>
              <option className="bg-purple-900/60 text-white" value="Novedades">
                Novedades
              </option>
            </select>

            <svg
              className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Grid con flip-card */}
      {sorted.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((flor) => (
            <div key={flor.id} className="flip-card">
              <div
                className="block bg-white/5 border border-white/20 rounded-3xl shadow-lg backdrop-blur-lg overflow-hidden w-full h-full"
              >
                <div className="flip-card-inner">
                  {/* Frente */}
                  <div className="flip-card-front">
                    <img
                      src={flor.src}
                      alt={flor.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="p-4 text-white absolute bottom-0 left-0">
                      <h3 className="text-xl font-bold text-pink-200">
                        {flor.titulo}
                      </h3>
                      <p className="text-sm italic text-pink-100 mt-1">
                        {flor.descripcion}
                      </p>
                    </div>
                  </div>
                  {/* Dorso */}
                  <div className="flip-card-back text-white text-sm">
                    <h3 className="text-lg font-semibold mb-2">
                      {flor.titulo}
                    </h3>
                    {flor.origin && (
                      <p className="mb-1">
                        <strong>Origen:</strong> {flor.origin}
                      </p>
                    )}
                    {flor.history && (
                      <p className="mb-1">
                        <strong>Historia:</strong> {flor.history}
                      </p>
                    )}
                    {flor.care && (
                      <p>
                        <strong>Cuidados:</strong> {flor.care}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-white/70 mt-12">
          No encontramos flores que coincidan con “{query}”.
        </p>
      )}
    </section>
  );
}
