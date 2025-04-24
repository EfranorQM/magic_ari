// src/components/Header.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Inyectar la fuente "Great Vibes"
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const navItems = [
    { label: "Inicio", to: "/" },
    { label: "Flores", to: "/flores" },
    { label: "Sobre Ari", to: "/sobre-ari" },
    { label: "Contacto", to: "/contacto" },
  ];

  return (
    <>
      <style>{`
        .font-script {
          font-family: 'Great Vibes', cursive;
        }
        /* Icono hamburguesa ↔️ X */
        .burger {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .burger.open {
          transform: rotate(45deg);
        }
        .burger.open::after {
          transform: rotate(-90deg);
          top: 0;
        }
        .burger::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: currentColor;
          top: 8px;
          left: 0;
          transition: transform 0.3s ease, top 0.3s ease;
        }
      `}</style>

      <header className="w-full px-6 py-4 backdrop-blur-md bg-gradient-to-br from-purple-900/30 via-fuchsia-900/30 to-rose-900/30 border-b border-white/20 shadow-lg z-20 relative">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-pink-300 animate-spin-slow">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2c1.657 0 3 1.79 3 4s-1.343 4-3 4-3-1.79-3-4 1.343-4 3-4zm6.364 3.636c1.17 1.17.757 3.122-.707 4.586-1.464 1.464-3.416 1.877-4.586.707-1.17-1.17-.757-3.122.707-4.586 1.464-1.464 3.416-1.877 4.586-.707zM4 12c0-1.657 1.79-3 4-3s4 1.343 4 3-1.79 3-4 3-4-1.343-4-3zm3.636 6.364c-1.17-1.17-.757-3.122.707-4.586 1.464-1.464 3.416-1.877 4.586-.707 1.17 1.17.757 3.122-.707 4.586-1.464 1.464-3.416 1.877-4.586.707zM20 12c0 1.657-1.79 3-4 3s-4-1.343-4-3 1.79-3 4-3 4 1.343 4 3z"
                />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-script text-pink-300 drop-shadow-md tracking-wide hover:text-pink-400 transition duration-300">
                Magic Ari
              </h1>
              <p className="text-sm text-pink-100 italic">
                Donde las flores tienen alma ✨
              </p>
            </div>
          </div>

          {/* Menú escritorio */}
          <nav className="hidden sm:flex gap-4">
            {navItems.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white/90 rounded-full backdrop-blur-sm transition flex items-center justify-center"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Botón móvil */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="sm:hidden relative text-pink-200 hover:text-pink-400 transition p-2"
          >
            <div
              className={`burger w-6 h-[2px] bg-current ${
                menuOpen ? "open" : ""
              }`}
            />
          </button>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <nav className="sm:hidden mt-4 flex flex-col gap-3 px-4">
            {navItems.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white/90 rounded-full backdrop-blur-sm transition"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
