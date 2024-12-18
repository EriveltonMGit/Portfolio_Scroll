import "./Page.style.css";
// IMPORT COMPONENTS
// import ThreeDTorus from "../../assets/components/Circle/circle";

import GradualSpacing from "../../components/ui/gradual-spacing";
// IMG
// import ScrollArrow from "../../assets/components/Arrow_Scroll/Arrow_scrool";
import { useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";

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

  const [title, setTitle] = useState("Texto inicial");
  useEffect(() => {
    // Atualizar o título dinamicamente (se necessário)
    setTitle("Bem-vindo ao Meu Portfólio eu sou");
  }, []);
  const [title2, setTitle2] = useState("Texto inicial");
  useEffect(() => {
    // Atualizar o título dinamicamente (se necessário)
    setTitle2(" ERIVELTON MAGALHÃES");
  }, []);

  return (
    <>
      <section
        className="section_1"
        id="inicio"
        // data-aos="zoom-out"
        // data-aos-duration="2000"
      >
        {/* CARD 1 */}
        <main className="card_1">
          <h1 className="title_ area-especial text_1 gradual-spacing">
          <GradualSpacing text={title} />
          <GradualSpacing text={title2} />
          </h1>
          <div className="mini_cards ">
            <div className="card_ ">
              <h3>
                SOU DESENVOLVEDOR FRONT END E Estou aqui para ajudar você a
                construir seu site.
              </h3>
              <p>Transformo a sua ideia em um verdadeiro ímã de clientes!</p>
            
              <div className="btn_div">
                {/* <Button /> */}
                <button className="button button-custom">
                  Entre em contato
                </button>

                <span>
                  <a href="">
                    {" "}
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="bi bi-github"></i>
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
