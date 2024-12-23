import "./Page_4.style.css";
import { VelocityScroll } from "../../components/ui/scroll-based-velocity";

// IMPORT icons
import { IoLogoHtml5 } from "react-icons/io5";
import { DiCss3 } from "react-icons/di";
import { IoLogoSass } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { RiAngularjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiGooglecloud } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
export default function Page_4() {
  const itemsSkills = [
    { id: 1, img: <IoLogoHtml5 />, titulo: "HTML 5" },
    { id: 2, img: <DiCss3 />, titulo: "CSS" },
    { id: 3, img: <IoLogoSass />, titulo: "SASS" },
    { id: 4, img: <FaReact />, titulo: "REACT" },
    { id: 5, img: <RiAngularjsFill />, titulo: "ANGULAR" },
    { id: 6, img: <IoLogoJavascript />, titulo: "JAVASCRIPT" },
    { id: 7, img: <SiTailwindcss />, titulo: "TAILWIND" },
    { id: 8, img: <SiStyledcomponents />, titulo: "STYLED COMPONENTS" },
    { id: 9, img: <IoLogoFigma />, titulo: "FIGMA" },
    { id: 10, img: <SiGooglecloud />, titulo: "GOOGLE CLOUD" },
    { id: 11, img: <BiLogoTypescript />, titulo: "TYPESCRIPT" },
    { id: 12, img: <FaBootstrap />, titulo: "BOOTSTRAP" },
    { id: 13, img: <FaGithub />, titulo: "GIT HUB" },
    { id: 14, img: <FaMagic />, titulo: "MAGIC UI" },
    { id: 15, img: <SiCanva />, titulo: "CANVA" },
    { id: 16, img: <SiPostgresql />, titulo: "POSTGRE SQL" },
  ];

  return (
    <section className="page_4" id="ferramentas">
      {/* CARD 1 */}
      <main className="card_1">
        <h1 className="title_ ">Skills:</h1>
       <div className="container_skill">
       {itemsSkills.map((item) => (
          <div key={item.id} className="skill-item">
            <div ><span>{item.img}</span></div>
            <span className="p_nome">{item.titulo}</span>
          </div>
        ))}
       </div>
      </main>
      {/* CARD 2 */}
      <main className="card_2">
        {/* CARD 1 */}
        <div>
          <img src="/img/Page_4/img_1.webp" alt="" />
          <h3>Responsividade</h3>
          <p>
            Desenvolvo interfaces claras e objetivas, com foco em garantir uma
            experiência perfeita em todos os dispositivos. Meu trabalho prioriza
            a responsividade, adaptando o design para telas de diferentes
            tamanhos, proporcionando uma navegação fluida e acessível.
          </p>
        </div>
        {/* CARD 2 */}
        <div>
          <img src="/img/Page_4/img_2.webp" alt="" />
          <h3>UI Desing</h3>
          <p>
            Crio interfaces claras, objetivas e, acima de tudo, intuitivas,
            garantindo uma experiência de uso agradável e eficiente. O foco é
            sempre facilitar a interação do usuário com o design, proporcionando
            navegabilidade e usabilidade sem complicações.
          </p>
        </div>
        {/* CARD 3*/}
        <div>
          <img src="/img/Page_4/img_3.webp" alt="" />
          <h3>Desenvolvimento</h3>
          <p>
            Desenvolvo sites profissionais, blogs, portfólios, landing pages e
            diversas outras soluções digitais, sempre com foco em performance,
            estética e funcionalidade para atender às suas necessidades.
          </p>
        </div>
      </main>
      {/* AQUI FICA OS CARDS ANIMADOS DO INFINITI CARDS */}
      <div className="text_scroll area-especial">
        <VelocityScroll
          text={
            "FRONT END - REACT - ANGULAR - NEXT.JS - TAILWIND CSS - BOOTSTRAP - INOVAÇÃO  - DESENVOLVIMENTO MODERNO - MAGIC UI - GSAP"
          }
        />
      </div>
    </section>
  );
}
