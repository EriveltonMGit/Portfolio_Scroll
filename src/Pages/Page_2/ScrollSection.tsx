import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// IMPORT CSS
import "./ScrollHorizontal.css";
import MiniCards from "../../assets/components/MiniCards/MiniCards";
import ThreeDTorus from "../../assets/components/Circle/circle";
import { HiCursorClick } from "react-icons/hi";
function ScrollSection() {
  // ANIMAÇAO PARA OS EFEITO DE ROLAGEM DOS OBJETOS
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const handleScroll_2 = () => {
      const scrollPosition = window.scrollY;
      const images = document.querySelectorAll(".animation");

      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          // Ajusta a posição dos elementos visíveis
          gsap.to(image, {
            x: scrollPosition * -0.4,
            duration: 1.0,
            ease: "power2.out",
          });
        } else {
          // Empurra os elementos para fora da tela (mais para a esquerda)
          gsap.to(image, {
            x: "100vw",
            duration: 1.2,
            ease: "power2.in",
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll_2);

    return () => {
      window.removeEventListener("scroll", handleScroll_2);
    };
  }, []);
  // ANIMAÇÃO DO SCROLL HORIZONTAL
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-203vw",
        ease: "none",
        duration: 0.5,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <>
      <section className="scroll-section-outer" id="sobre">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            {/* SECTION 1 */}
            <main className="scroll-section" >
              {/* sobre */}
              <div className="sobre">
                <h2 className="area-especial">
                  SOBRE:
                </h2>
                <p >
                  Formado em Análise e Desenvolvimento de Sistemas, sou
                  desenvolvedor Front-end  com certificação em Desenvolvedor Full Stack e
                  Google Cloud Computing. Atualmente,
                  estou expandindo meus conhecimentos cursando Ciência da
                  Computação. Minha paixão por tecnologia e design me capacita a
                  criar soluções eficientes, inovadoras e visualmente atraentes,
                  com foco em performance e usabilidade.
                  
                </p>
                <p className="p-device">
                    {" "}
                    Tenho experiência prática com ferramentas como Angular e
                    React, e estou sempre explorando novas tecnologias e
                    tendências para otimizar meus projetos, proporcionando uma
                    experiência de usuário envolvente e intuitiva.
                  </p>
              </div>
              {/* foto_perfil */}
              <div className="foto_perfil animation">
                <img src="/img/page_2/foto.webp" alt="" />
                <img
                  className="elipse"
                  src="/img/page_2/Elipse-1.webp"
                  alt=""
                />
              </div>
            </main>
            {/* SECTION 2 */}
            <div className="scroll-section device_text_impacto">
              <div className="text_mini_cards ">
                <h3 className="area-especial">
                  Inovação e Impacto no Mundo Digital
                </h3>
                <p>
                  {" "}
                  Minha experiência inclui a criação de interfaces modernas e
                  interativas, landing pages otimizadas para conversão e a
                  implementação de soluções de UX/UI focadas na experiência do
                  usuário. Além disso, dedico-me ao desenvolvimento de
                  aplicações web responsivas e escaláveis, alinhando estética e
                  funcionalidade para criar produtos digitais que encantam e
                  performam.
                </p>
                <p> Cada
                  detalhe é pensado com cuidado, desde o design inicial até a
                  implementação final, garantindo resultados sólidos, criativos
                  e eficientes. Seja um projeto pequeno ou uma solução robusta,
                  meu objetivo é sempre agregar valor, com experiências digitais
                  que realmente fazem a diferença.</p>
              </div>
              {/* minicards */}
              <div className="area_cards text_2">
                <MiniCards />
              </div>
            </div>
            <div className="scroll-section secttion_3-cards">
              <div className="content_mini-cards">
                <h3 className="area-especial">
                Com 1 ano de experiência como Desenvolvedor Frontend!
                </h3>
                <p>
                  Ofereço uma ampla gama de serviços de alta qualidade,
                  cuidadosamente elaborados para atender a todas as suas
                  necessidades. Com um compromisso firme em entregar resultados
                  excepcionais, estou aqui para ajudar você a alcançar seus
                  objetivos por meio de soluções personalizadas, pensadas
                  especialmente para o seu contexto único.
                </p>
              
              </div>
              {/*minicards  */}
              <div className="area_circle " >
                <ThreeDTorus/>
                <HiCursorClick className="icon_cursor "/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ScrollSection;
