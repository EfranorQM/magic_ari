import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Carrusel } from "./components/Carrusel";
import { FloresPage } from "./pages/Flores";
import { SobreAriPage } from "./pages/SobreAri";
import { ContactoPage } from "./pages/Contacto";           // crea este


function HomePage() {
  return (
    <>
      <Intro />
      <Carrusel />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Fondo y encabezado siempre */}
      <Background />
      <Header />

      {/* Aquí van las páginas según la ruta */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flores" element={<FloresPage />} />
        <Route path="/sobre-ari" element={<SobreAriPage />} />
        <Route path="/contacto" element={<ContactoPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
