// src/constants/carruselData.ts

export type CarruselItem = {
  id: string;
  src: string;
  alt: string;
  titulo: string;
  descripcion: string;
  categories?: string[];
  origin?: string;
  history?: string;
  care?: string;
};

export const floresDestacadas: CarruselItem[] = [
  {
    id: "rosa-encantada",
    src: "/assets/flores/rosa-encantada.png",
    alt: "Rosa encantada con gotas de rocío",
    titulo: "Rosa Encantada",
    descripcion: "Simboliza el amor eterno y la elegancia sutil.",
    categories: ["rosas", "románticas"],
    origin: "Asia Central",
    history:
      "Cultivada desde hace milenios en jardines reales, símbolo de afecto profundo.",
    care: "Riego moderado (2–3 veces/semana), exposición a sol matutino y poda ligera tras floración.",
  },
  {
    id: "girasol-magico",
    src: "/assets/flores/girasol-magico.png",
    alt: "Girasol mágico iluminado por el sol",
    titulo: "Girasol Mágico",
    descripcion: "Una flor que sonríe al sol, llena de alegría.",
    categories: ["tropicales", "verano"],
    origin: "América del Norte",
    history:
      "Apreciado por nativos americanos como símbolo de gratitud y alimento.",
    care: "Pleno sol, riego frecuente en verano, suelo bien drenado y fertilización mensual.",
  },
  {
    id: "tulipan-rosado",
    src: "/assets/flores/tulipan-rosado.png",
    alt: "Tulipán rosado en campo abierto",
    titulo: "Tulipán Rosado",
    descripcion: "Pureza, calma y un toque de romanticismo.",
    categories: ["primaverales", "románticas"],
    origin: "Asia Menor",
    history:
      "Popularizado en Holanda en el siglo XVII, protagonista de la ‘Tulipomanía’.",
    care: "Bulbos plantados en otoño, riego escaso en invierno, luz indirecta en primavera.",
  },
  {
    id: "lirio-celestial",
    src: "/assets/flores/lirio-celestial.png",
    alt: "Lirio azul en un campo brillante",
    titulo: "Lirio Celestial",
    descripcion: "Representa la sabiduría divina y la serenidad interior.",
    categories: ["exóticas", "elegantes"],
    origin: "Europa y Asia",
    history:
      "Asociado a reyes y mitología griega, símbolo de pureza y nobleza.",
    care: "Luz indirecta, riego moderado, mantén la tierra húmeda sin encharcar.",
  },
  {
    id: "orquidea-mistica",
    src: "/assets/flores/orquidea-mistica.png",
    alt: "Orquídea púrpura con luz tenue",
    titulo: "Orquídea Mística",
    descripcion: "Elegancia exótica que florece en el misterio.",
    categories: ["exóticas", "tropicales"],
    origin: "Sudamérica",
    history:
      "En la antigua China, símbolo de fertilidad y lujo, cultivada en palacios.",
    care: "Alta humedad, luz filtrada, riego ligero pero frecuente y sustrato bien aireado.",
  },
  {
    id: "dalia-carmesí",
    src: "/assets/flores/dalia-carmesi.png",
    alt: "Dalia de pétalos intensamente rojos",
    titulo: "Dalia Carmesí",
    descripcion: "Fuerza, pasión y belleza vibrante en una sola flor.",
    categories: ["verano", "vibrantes"],
    origin: "México",
    history:
      "Flor nacional de México, empleada por civilizaciones prehispánicas en ceremonias.",
    care: "Sol directo 4–6 horas, riego regular, tutor para tallos altos y poda tras floración.",
  },
  {
    id: "jazmin-nocturno",
    src: "/assets/flores/jazmin-nocturno.png",
    alt: "Jazmín blanco brillando en la noche",
    titulo: "Jazmín Nocturno",
    descripcion: "Aroma que despierta los sueños bajo la luna.",
    categories: ["aromáticas", "nocturnas"],
    origin: "Asia Meridional",
    history:
      "Usado en perfumería y rituales, su fragancia se intensifica al caer la noche.",
    care: "Luz brillante indirecta, riego moderado, podas ligeras para controlar tamaño.",
  },
  {
    id: "hibisco-radiante",
    src: "/assets/flores/hibisco-radiante.png",
    alt: "Hibisco rojo al atardecer",
    titulo: "Hibisco Radiante",
    descripcion: "Vitalidad tropical que enciende el alma.",
    categories: ["tropicales", "vibrantes"],
    origin: "Asia Oriental",
    history:
      "Símbolo de belleza efímera en culturas polinesias, se usa en infusiones.",
    care: "Pleno sol, riego abundante, poda anual para mantener forma y floración.",
  },
  {
    id: "cerezo-en-flor",
    src: "/assets/flores/cerezo-en-flor.png",
    alt: "Flores de cerezo en primavera",
    titulo: "Cerezo en Flor",
    descripcion: "Belleza efímera que celebra la vida en su instante más puro.",
    categories: ["primaverales", "efímeras"],
    origin: "Japón",
    history:
      "Parte central del hanami japonés, tradición de contemplar sus breves flores.",
    care: "Suelo ligeramente ácido, riego moderado, protegido de vientos fuertes.",
  },
];
