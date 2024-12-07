"use client";

import '../../Pages/Page_2/Page_2.style.css'; // Seu arquivo de estilo SCSS

import { InfiniteMovingCards } from "../ui/inifity_moving";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="cards_animados"> 
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    quote: "Participar da comunidade Código Certo Coders me fez perceber que aprender programação é um esforço colaborativo.",
    name: "Alice Mendes",
    title: "Desenvolvedora Front-End",
  },
  {
    id: 2,
    quote: "As oportunidades aqui me ajudaram a construir minha carreira em tecnologia. Estou muito grata por essa comunidade!",
    name: "Carlos Silva",
    title: "Engenheiro de Software",
  },
  {
    id: 3,
    quote: "As dicas e insights compartilhados por outros membros me motivaram a melhorar constantemente minhas habilidades de programação.",
    name: "Fernanda Lima",
    title: "Analista de Sistemas",
  },
  {
    id: 4,
    quote: "A comunidade é um espaço seguro para aprender e crescer. Nunca me senti sozinha nessa jornada.",
    name: "Gabriel Santos",
    title: "Desenvolvedor de Jogos",
  },
  {
    id: 5,
    quote: "Aqui, encontrei colegas que compartilham minha paixão por tecnologia e inovação. Juntos, estamos mudando o cenário da programação.",
    name: "Juliana Costa",
    title: "Engenheira de Software",
  },
  {
    id: 6,
    quote: "A troca de experiências e o suporte dos membros me ajudaram a conseguir minha primeira vaga como desenvolvedor.",
    name: "Renan Alves",
    title: "Desenvolvedor Back-End",
  },
  {
    id: 7,
    quote: "O que mais gosto na comunidade Código Certo Coders é a disposição de todos em ajudar uns aos outros a prosperar.",
    name: "Sofia Ribeiro",
    title: "Desenvolvedora Full Stack",
  },
  {
    id: 8,
    quote: "Cada interação aqui é uma oportunidade de aprendizado. Estou animada para ver o que o futuro nos reserva!",
    name: "Lucas Ferreira",
    title: "Estudante de Ciência da Computação",
  },
];

