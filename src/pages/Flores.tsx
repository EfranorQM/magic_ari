// src/pages/Flores.tsx
import { useState, useMemo } from "react";
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
    <section className="bg-transparent px-4 pt-32 pb-16 relative z-10">
      <style>{`
  .flip-card {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    perspective: 1200px;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s ease-in-out;
  }
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: 1rem;
    overflow: hidden;
  }
  .flip-card-front {
    /* nada extra: la imagen ocupa todo el espacio */
  }
  .flip-card-back {
    transform: rotateY(180deg);
    background-color: rgba(234, 243, 224, 0.85); /* pastel #EAF3E0 */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #2F4F4F; /* verde oscuro para el texto */
  }
`}</style>


      {/* Título + Controles */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 pg-1">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900">
          Todas nuestras flores
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Buscador */}
          <input
            type="text"
            placeholder="Buscar…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 rounded-full bg-white/20 text-green-900 placeholder-green-600 focus:bg-white/30 focus:ring-2 focus:ring-green-300/50 outline-none transition"
          />

          {/* Categorías */}
          <div className="relative w-full sm:w-40">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-white/20 text-green-900 placeholder-green-600 focus:bg-white/30 focus:ring-2 focus:ring-green-300/50 outline-none appearance-none transition"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="text-green-900">
                  {cat}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600"
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

          {/* Orden */}
          <div className="relative w-full sm:w-40">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-white/20 text-green-900 placeholder-green-600 focus:bg-white/30 focus:ring-2 focus:ring-green-300/50 outline-none appearance-none transition"
            >
              <option value="A-Z">Alfabético A–Z</option>
              <option value="Z-A">Alfabético Z–A</option>
              <option value="Novedades">Novedades</option>
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600"
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
              <div className="block bg-white/5 border border-white/20 rounded-3xl shadow-lg backdrop-blur-lg overflow-hidden w-full h-full">
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
