// src/pages/ContactoPage.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ContactoPage: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviando mensaje:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative z-10 py-12 md:py-16 px-4 max-w-md mx-auto">
      {/* breadcrumbs */}
      <nav className="text-sm text-green-800/70 mb-6">
        <Link to="/" className="hover:text-green-900">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <span className="text-pink-600">Contacto</span>
      </nav>

      {/* título + intro */}
      <header className="text-center space-y-4 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-900">
          Contáctanos
        </h1>
        <p className="text-green-800 text-base sm:text-lg leading-relaxed">
          ¿Tienes preguntas, sugerencias o simplemente quieres saludar? Escríbeme
          y responderé lo antes posible.
        </p>
      </header>

      {/* aviso de envío */}
      {submitted && (
        <div className="mb-6 rounded-lg bg-green-500/20 border border-green-400/40 text-green-900 text-center py-3">
          ¡Gracias! Tu mensaje ha sido enviado.
        </div>
      )}

      {/* formulario glass */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white/30 backdrop-blur-sm rounded-2xl shadow-md p-6"
      >
        <div>
          <label className="block mb-1 text-sm text-green-900">Nombre</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-green-900 placeholder-green-700 focus:bg-white/30 focus:ring-2 focus:ring-green-300/50 outline-none transition"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-green-900">Correo</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="tu@correo.com"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-green-900 placeholder-green-700 focus:bg-white/30 focus:ring-2 focus:ring-green-300/50 outline-none transition"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-green-900">Mensaje</label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Escribe tu mensaje aquí…"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-green-900 placeholder-green-700 focus:bg-white/30 focus:ring-2 focus:ring-green-300/50 outline-none transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-pink-600 hover:bg-pink-500 text-white font-medium transition"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};
