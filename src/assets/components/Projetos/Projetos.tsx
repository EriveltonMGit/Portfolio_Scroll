// IMPORT CSS
import "./Projetos.css";

function Projetos() {
  const ittemsProjects = [
    {
      id: 1,
      name: "Digital Dream",
      image: "/img/Page_3/img_1.webp",
      description:
        "Web Design Page é uma página moderna e criativa que destaca soluções em design e desenvolvimento web. Com um layout minimalista e interativo, o site foi projetado para apresentar serviços, portfólios e ideias inovadoras de forma clara e atrativa. Ideal para profissionais e empresas que buscam inspiração ou desejam criar experiências digitais impactantes.",
      site: "https://web-desing-page.netlify.app/",
      project: "",
    },
    {
      id: 2,
      name: "Digital Comerce",
      image: "/img/Page_3/img_2.webp",
      description:
        "Digital Commerce é uma plataforma de comércio eletrônico intuitiva e moderna, projetada para oferecer uma experiência de compra eficiente e agradável. Com uma interface limpa, recursos interativos e navegação simplificada, o site é ideal para explorar e adquirir produtos de forma rápida e segura. Uma solução perfeita para quem busca praticidade no mundo digital.",
      site: "https://digital-comerce.netlify.app/",
      project: "",
    },
    {
      id: 3,
      name: "Hamburgueria do Chef",
      image: "/img/Page_3/img_3.webp",
      description:
        "Hamburgueria do Chef é um site que traz o melhor da experiência gourmet diretamente para você. Com um design atrativo e apetite visual, o site apresenta um menu exclusivo de hambúrgueres artesanais, combinando sabores únicos e ingredientes de alta qualidade. Ideal para quem aprecia uma refeição deliciosa e uma experiência online fácil e prática.",
      site: "https://hamburgueria-do-chef.netlify.app/",
      project: "https://github.com/EriveltonMGit/Burger_grill",
    },
    {
      id: 4,
      name: "Formulario FronEnd Fusion",
      image: "/img/Page_3/img_7.webp",
      description:
        "Este projeto é um formulário de cadastro desenvolvido com React, Redux e Ant Design, voltado para o **Desafio Frontend Fusion**. O objetivo é proporcionar uma experiência simples e intuitiva para que os usuários possam se cadastrar no desafio. Os dados dos formulários são validados e armazenados no **Local Storage**, garantindo funcionalidade e usabilidade.  ",
      site: "https://desafio-frontend-fusion.netlify.app/",
      project:
        "https://github.com/EriveltonMGit/desafio-formulario-com-validacao-frontend/tree/Erivelton-Magalhaes",
    },
    {
      id: 5,
      name: "Projeto Codigo Certo",
      image: "/img/Page_3/img_5.webp",
      description:
        " Codigo Certo é uma plataforma web moderna e responsiva, desenvolvida com foco em boas práticas de desenvolvimento e código limpo. O objetivo principal é oferecer um ambiente prático, acessível e intuitivo que demonstram as minhas habilidades em desenvolvimento web. Este projeto reflete minha experiência como desenvolvedor Full Stack e designer UX/UI, com ênfase na criação de soluções eficientes e inovadoras.",
      site: "https://codigo-certo.netlify.app/",
      project: "https://github.com/EriveltonMGit/Codigo_certo",
    },
    {
      id: 6,
      name: "Todo List",
      image: "/img/Page_3/img_6.webp",
      description:
        "O projeto Listagem de Tarefas é uma aplicação web que permite aos usuários gerenciar suas tarefas de forma prática e eficiente. Este sistema foi desenvolvido para organizar atividades, oferecendo uma interface limpa e intuitiva, com recursos como adição, exclusão e visualização de tarefas.",
      site: "https://listagem-tarefas.netlify.app/",
      project: "https://github.com/EriveltonMGit/TodoList",
    },
    {
      id: 7,
      name: "Desafio Apresentação",
      image: "/img/Page_3/img_4.webp",
      description:
        "Apresentação Pessoal, o objetivo deste projeto foi criar uma página de apresentação pessoal que destaca minhas informações, habilidades e projetos recentes, utilizando React e Redux para boas práticas de desenvolvimento frontend.",
      site: "https://apresentacao-pessoal-frontend.netlify.app/",
      project: "https://github.com/EriveltonMGit/apresentacao-pessoal-frontend/tree/Erivelton-Magalhaes",
    },
  
    {
      id: 8,
      name: "Galeria de imagem ",
      image:
        "/img/Page_3/img_8.webp",
      description:
        "Este é um projeto de galeria de imagens desenvolvido com React, Redux e Ant Design. O projeto permite que os usuários visualizem imagens, adicionem imagens aos favoritos, removam imagens da lista de favoritos e exiba notificações ao realizar essas ações. ",
      site: "https://desafio-galeria-de-imagem-frontendfus.netlify.app/",
      project:
        "https://github.com/EriveltonMGit/desafio-galeria-de-imagem-frontendfusion/tree/Erivelton-Magalhaes",
    },
  ];

  return (
    <>
      {ittemsProjects.map((item) => (
        <div key={item.id} className="body_project button-custom ">
          <p className="name">{item.name}</p>
          <img className="img_project" src={item.image} alt={item.name} />
          <span className="descricao">{item.description}</span>
          {item.site && (
            <a
              href={item.site}
              className="site_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visite o site
            </a>
          )}
          {item.project && (
            <a
              href={item.project}
              className="project_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver projeto
            </a>
          )}
        </div>
      ))}
    </>
  );
}

export default Projetos;
