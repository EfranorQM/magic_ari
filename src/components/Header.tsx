// src/components/Header.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { label: "Inicio", to: "/" },
    { label: "Flores", to: "/flores" },
    { label: "Sobre Ari", to: "/sobre-ari" },
    { label: "Contacto", to: "/contacto" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Banda glass sobre pastel */}
      <div className="backdrop-blur-md bg-[#EAF3E0]/50 border-b border-green-200/40">
        <div className="mx-auto max-w-6xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
          {/* Logo + título */}
          <Link
            to="/"
            className="flex items-center gap-3 text-green-900 hover:text-pink-600 transition"
          >
            <img
              src="/assets/logo.png"
              alt="Logo Entre Pétalos"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
            <span className="text-lg sm:text-xl font-semibold whitespace-nowrap">
              Entre Pétalos
            </span>
          </Link>

          {/* Nav escritorio */}
          <nav className="hidden md:flex gap-6">
            {navItems.map(({ label, to }) => {
              const active = pathname === to;
              return (
                <Link
                  key={label}
                  to={to}
                  className={`relative text-sm sm:text-base ${
                    active ? "text-pink-600" : "text-green-800"
                  } hover:text-pink-600 transition group`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-pink-600 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Botón móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-green-800 hover:text-pink-600 transition p-2"
            aria-label="Menú"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-[#EAF3E0]/70 backdrop-blur-md border-l border-green-200/40 shadow-md transform transition-transform duration-300 md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-green-200/40">
          <span className="text-green-900 font-semibold">Menú</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-green-800 hover:text-pink-600 transition p-1"
            aria-label="Cerrar"
          >
            <X size={22} />
          </button>
        </div>
        <ul className="flex flex-col divide-y divide-green-200/30">
          {navItems.map(({ label, to }) => {
            const active = pathname === to;
            return (
              <li key={label}>
                <Link
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-6 py-4 ${
                    active ? "text-pink-600" : "text-green-800"
                  } hover:text-pink-600 transition`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </header>
  );
};
