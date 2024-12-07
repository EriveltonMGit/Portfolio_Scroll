"use client";

import { useEffect } from "react";

const Scroll = () => {
  useEffect(() => {
    // Verifica se `Lenis` está disponível globalmente
    if (typeof window !== "undefined" && window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.0, // Duração da rolagem suave
        easing: (t: number) => t, // Easing
        wrapper: document.body, // Body como wrapper
        content: document.documentElement, // HTML como conteúdo
      });

      // Função de animação da rolagem suave
      const scroll = () => {
        lenis.raf(performance.now());
        requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);

      // Seleciona links de âncora
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          const targetId = link.getAttribute("href");

          if (targetId && targetId !== "#") {
            const targetElement = document.querySelector(targetId) as HTMLElement;
            if (targetElement) {
              lenis.scrollTo(targetElement);
            }
          }
        });
      });

      // Limpeza no unmount
      return () => {
        lenis.destroy();
      };
    } else {
      console.error("Lenis não está disponível.");
    }
  }, []);

  return null; // O componente não renderiza nada visível
};

export default Scroll;
