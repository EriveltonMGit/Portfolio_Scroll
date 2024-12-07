import "./Page_4.style.css";
import { VelocityScroll } from "../../components/ui/scroll-based-velocity";
// IMPORT COMPONENTS
import ThreeDTorus from "../../assets/components/Circle/circle";
export default function Page_4() {
  return (
    <section className="page_4" id="ferramentas">
      {/* CARD 1 */}
      <main
        className="card_1"
       
      >
<ThreeDTorus/>

      </main>
      {/* CARD 2 */}
      <main className="card_2" >
        {/* CARD 1 */}
        <div>
          <img src="/src/assets/img/Page_4/img_1.webp" alt="" />
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
          <img src="/src/assets/img/Page_4/img_2.webp" alt="" />
          <h3>UI Desing</h3>
          <p>
            Crio interfaces claras, objetivas e, acima de tudo, intuitivas,
            garantindo uma experiência de uso agradável e eficiente. O foco é
            sempre facilitar a interação do usuário com o design, proporcionando
            navegabilidade e usabilidade sem complicaçõe
          </p>
        </div>
        {/* CARD 3*/}
        <div>
          <img src="/src/assets/img/Page_4/img_3.webp" alt="" />
          <h3>Desenvolvimento</h3>
          <p>
            Desenvolvo sites profissionais, blogs, portfólios, landing pages e
            diversas outras soluções digitais, sempre com foco em performance,
            estética e funcionalidade para atender às suas necessidades
          </p>
        </div>
      </main>
      {/* AQUI FICA OS CARDS ANIMADOS DO INFINITI CARDS */}
      <div className="text_scroll area-especial">
        {/* <InfiniteMovingCardsDemo /> */}
        {/* <ScrollBasedVelocity /> */}
        <VelocityScroll
          text={
            "FRONT END - FERRAMENTAS COMO REACT, ANGULAR, NEXT.JS, TAILWIND CSS, BOOTSTRAP - INOVAÇÃO - FUTURO - DESENVOLVIMENTO MODERNO - MAGIC UI - KANBAN -"
          }
        />
      </div>
    </section>
  );
}
