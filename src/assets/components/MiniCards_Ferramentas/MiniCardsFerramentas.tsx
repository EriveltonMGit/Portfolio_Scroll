// IMPORT ICONS REACT
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiStyledcomponents } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { BiLogoFigma } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { BiLogoSass } from "react-icons/bi";
import { SiGooglecloud } from "react-icons/si";
import { TbApi, TbBrandTypescript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { RxMagicWand } from "react-icons/rx";
import { TbBrandFramerMotion } from "react-icons/tb";
import { PiMagicWand } from "react-icons/pi";

// IMPORT CSS
import "./MiniCardsFerramentas.css";
function MiniCardsFerramentas() {
  const items = [
    { id: 1, Image: <FaReact className="icom_ferr" />, name: "REACT" },
    { id: 2, Image: <FaAngular className="icom_ferr" />, name: "ANGULAR" },
    { id: 3, Image: <FaHtml5 className="icom_ferr" />, name: "HTML5" },
    { id: 4, Image: <DiCss3 className="icom_ferr" />, name: "CSS3" },
    { id: 5, Image: <IoLogoJavascript className="icom_ferr" />, name: "JAVASCRIPT" },
    { id: 6, Image: <SiStyledcomponents className="icom_ferr" />, name: "STYLED COMPONENTS" },
    { id: 7, Image: <RiTailwindCssLine className="icom_ferr" />, name: "TAILWINDCSS" },
    { id: 8, Image: <BiLogoFigma className="icom_ferr" />, name: "FIGMA" },
    { id: 9, Image: <FaGithub className="icom_ferr" />, name: "GITHUB" },
    { id: 10, Image: < BiLogoSass className="icom_ferr" />, name: "SASS" },
    { id: 11, Image: <SiGooglecloud className="icom_ferr" />, name: "GOOGLE CLOUD" },
    { id: 12, Image: <TbBrandTypescript className="icom_ferr" />, name: "TYPESCRIPT" },
    { id: 13, Image: <FaBootstrap className="icom_ferr" />, name: "BOOTSTRAP" },
    { id: 14, Image: <SiPostgresql className="icom_ferr" />, name: "POSTGRE SQL" },
    { id: 15, Image: <SiCanva className="icom_ferr" />, name: "CANVA" },
    { id: 17, Image: <SiNextdotjs className="icom_ferr" />, name: "NEXT JS" },
    {id:16, Image:< PiMagicWand  className="icom_ferr"/>, name:"MATERIAL UI"},
    { id: 18, Image: <TbApi className="icom_ferr" />, name: "REST API" },
    { id: 19, Image: <TbBrandFramerMotion className="icom_ferr"/>, name:"Framer Motion"},
    { id: 20, Image: <RxMagicWand  className="icom_ferr" />, name: "MAGIC UI" },
  ];
  return (
    <>
      <section className="section_ferrametas_cards">
        {items.map((item) => (
          <div key={item.id} className="ferramentas-card area-especial">
            {item.Image}
            <p>{item.name}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default MiniCardsFerramentas;
