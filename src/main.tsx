import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";


// IMPORTAR AOS
import AOS from "aos";
import "aos/dist/aos.css";  // Estilos do AOS

import BolinhaSeguindoMouse from "../src/assets/components/Cursor/cursor_bolinha.tsx";
import Scroll from "../src/assets/components/scroll/Scroll_Suave.tsx";

// Inicializando AOS
AOS.init({
  duration: 1000,  // A duração da animação
  easing: "ease-in-out",  // Efeito de aceleração/desaceleração
  once: true,  // Se deve rodar apenas uma vez
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BolinhaSeguindoMouse /> 
    <Scroll />
    <App />
  </StrictMode>
);
