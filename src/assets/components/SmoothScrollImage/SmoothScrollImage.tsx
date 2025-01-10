import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SmoothScrollImage.css';

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollImage = () => {
  useEffect(() => {
    // Configura ScrollTrigger para rotação contínua com rotação aumentada
    gsap.to('.scroll-image', {
      rotation: 2440, // Aumenta a rotação (4 voltas completas)
      ease: 'none', // Sem desaceleração
      scrollTrigger: {
        trigger: document.body, // Aplica ao corpo da página inteira
        start: 'top top', // Inicia no topo da página
        end: 'bottom top', // Continua até o final
        scrub: true, // Sincroniza a rotação com o scroll
      },
    });

    // Configura ScrollTrigger para desaparecer após rolar 300vw
    gsap.to('.scroll-image', {
      opacity: 0, // Desaparece gradualmente
      ease: 'power1.out',
      scrollTrigger: {
        trigger: document.body, // Aplica ao corpo da página inteira
        start: 'top top', // Começa no topo da página
        end: '+=400vw', // Desaparece após rolar 300% da largura da tela
        scrub: true, // Sincroniza o desaparecimento com o scroll
      },
    });
  }, []);

  return (
    <>
      <div className="container_img_scroll">
        <img
          src="/public/img/Page_2/climp_2.png"
          alt="Scroll Image"
          className="scroll-image"
        />
      </div>
    </>
  );
};

export default SmoothScrollImage;
