import "./Page.style.css";
import GradualSpacing from "../../components/ui/gradual-spacing";

import { useEffect } from "react";
import { gsap } from "gsap";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
export default function Page_1() {
  useEffect(() => {
    const handleScroll_2 = () => {
      console.log("Scrolling");
      const scrollPosition = window.scrollY;
      const text_1 = document.querySelectorAll(".text_1");
      gsap.to(text_1, { y: scrollPosition * -0.4, duration: 0.8 });

      const text_2 = document.querySelector(".text_2");
      if (text_2) {
        gsap.to(text_2, { x: -scrollPosition * 0.5, duration: 0.5 });
      }
    };

    window.addEventListener("scroll", handleScroll_2);

    return () => {
      window.removeEventListener("scroll", handleScroll_2);
    };
  }, []);
  // funçao para falar com o desenvolvedor
  function contato() {
    window.open(
      "https://api.whatsapp.com/send?phone=5561981579569&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!",
      "_blank",
      "noopener,noreferrer"
    );
  }
  return (
    <>
      <section
        className="section_1"
        id="inicio"
        
      >
  
        {/* CARD 1 */}
        <main className="card_1">
          <h1 className="title_ area-especial text_1 gradual-spacing">
            <GradualSpacing text="BEM-VINDO AO MEU PORTFÓLIO" />
          </h1>
          <div className="mini_cards ">
            <div className="card_ ">
              <h3>
                EU SOU ERIVELTON MAGALHÃES, DESENVOLVEDOR FRONT END E ESTOU AQUI
                PARA AJUDAR VOCÊ A CONSTRUIR SEU SITE.
              </h3>
              <p>Transformo a sua ideia em um verdadeiro ímã de clientes!</p>

              <div className="btn_div">
                {/* <Button /> */}
                <button className="button button-custom" onClick={contato}>
                  Entre em contato
                </button>

                <span>
                  <a href="https://api.whatsapp.com/send?phone=5561981579569&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!" target="_blank" rel="noopener noreferrer">
                    {" "}
                    
                    <i className="bi bi-whatsapp"><FaWhatsapp/></i>
                  </a>
                  <a href="https://www.linkedin.com/in/erivelton-magalh%C3%A3es-553a6b215/">
                    
                    <i className="bi bi-linkedin"><CiLinkedin/></i>
                  </a>
                  <a href="https://github.com/EriveltonMGit/EriveltonMGit" className="socialIcon" target="_blank" rel="noopener noreferrer">
                    {" "}
                   
                    <i className="bi bi-github"><FaGithub/></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </main>
        {/* CARD 2 */}
        <main className="card_2 ">{/* <ThreeDTorus /> */}</main>
        {/* ARROW */}
        {/* <ScrollArrow /> */}
        <div className="container_arrow">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
        {/* div blur */}
        <div className=" div_opacity_left"></div>
        <div className=" div_opacity_right"></div>
      </section>
    </>
  );
}
