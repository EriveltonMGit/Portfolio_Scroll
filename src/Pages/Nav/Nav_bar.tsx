import { useState, useEffect } from "react";
import './Nav.style.css';


export default function Nav() {
  // Estado para controlar a visibilidade da nav
  const [navVisible, setNavVisible] = useState(false);

  // Hook para monitorar a rolagem
  useEffect(() => {
    const handleScroll = () => {
      // Verifica a porcentagem de rolagem da página
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      // Atualiza o estado da nav baseado na rolagem
      if (scrollPercentage > 1) {
        setNavVisible(true);  
      } else {
        setNavVisible(false); 
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpeza do evento de scroll
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`nav_bar ${navVisible ? "visible" : ""}`}>
      <main className="logo">
       <a href="https://web-desing-page.netlify.app/"> <img src="/img/icons/logo.svg" alt="Logo" /></a>
      </main>

      <ul className="ul_nav">
        <li>
          <a href="#inicio">
            <i className="bi bi-house"></i>INÍCIO
          </a>
        </li>
        <li>
          <a href="#sobre">
            <i className="bi bi-file-earmark-text"></i>SOBRE
          </a>
        </li>
      
        <li>
          <a href="#eventos">
            <i className="bi bi-star text"></i>SITE
          </a>
        </li>
        <li>
          <a href="#projetos">
            <i className="bi bi-substack"></i>PROJETOS
          </a>
        </li>
        <li>
          <a href="#ferramentas">
            <i className="bi bi-ui-radios-grid"></i>FERRAMENTAS
          </a>
        </li>
        <li>
          <a href="#contato">
            <i className="bi bi-person-lines-fill"></i>CONTATO
          </a>
        </li>
      </ul>

      <button className="btn_menu_device">
        <span><i className="bi bi-list"></i></span>
      </button>
    </section>
  );
}
