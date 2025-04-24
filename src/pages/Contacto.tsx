// src/pages/ContactoPage.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export function ContactoPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // aquí podrías enviar a un endpoint o service de email
    console.log("Enviando mensaje:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-12 px-6 sm:px-4 max-w-lg mx-auto text-white">
      {/* Breadcrumbs */}
      <nav className="text-sm text-white/70 mb-4">
        <Link to="/" className="hover:text-pink-400">
          Inicio
        </Link>{" "}
        / <span className="text-pink-300">Contacto</span>
      </nav>

      {/* Título */}
      <h1
        className="text-4xl font-script text-pink-300 mb-4 text-center"
        style={{ fontFamily: '"Great Vibes", cursive' }}
      >
        Contáctanos
      </h1>
      <p className="text-center text-white/80 mb-8">
        ¿Tienes preguntas, sugerencias o simplemente quieres saludar?  
        Escríbeme y te responderé lo antes posible. 🌸
      </p>

      {submitted && (
        <div className="mb-6 p-4 bg-green-500/30 text-green-100 rounded-lg text-center">
          ¡Gracias! Tu mensaje ha sido enviado.
        </div>
      )}

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 text-sm font-medium">Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:bg-white/20 focus:ring-2 focus:ring-pink-300/50 outline-none transition"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Correo</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:bg-white/20 focus:ring-2 focus:ring-pink-300/50 outline-none transition"
            placeholder="tu@correo.com"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Mensaje</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:bg-white/20 focus:ring-2 focus:ring-pink-300/50 outline-none transition resize-none"
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-pink-400 hover:bg-pink-500 text-white font-semibold rounded-full shadow-lg transition"
        >
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}
