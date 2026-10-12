import { AboutTemplate } from '../components/templates/AboutTemplate';

const aboutTitles = [
  { variant: "h1", content: "Quiénes Somos", className: "titulo-principal" },
  { variant: "p", content: "Conoce la historia, visión y el equipo detrás de Path of Exile Currency Exchange", className: "subtitulo" }
];

const aboutIntros = [
  {
    src: '/images/poe2-soldier.webp',
    alt: "Nuestra Misión y Origen",
    content: "Nacimos como una iniciativa de jugadores experimentados de Path of Exile cansados de las estafas y las demoras en el comercio informal. Nuestra misión es brindar una plataforma segura, ágil y transparente donde cada exiliado pueda intercambiar orbes y divisas con total confianza."
  },
  {
    src: '/images/poe2-soldier.webp',
    alt: "Compromiso con la Comunidad",
    content: "Creemos en la transparencia y el juego limpio. Monitoreamos constantemente las tasas de cambio de la liga para garantizar valores justos y proporcionamos soporte continuo para que tu única preocupación sea conquistar el Atlas.",
    className: "reverse"
  }
];

const aboutTeam = [
  {
    src: '/images/poe2-soldier.webp',
    alt: "AI Abusser",
    title: "AI Abuser",
    description: "Fundador & Arquitectura Web"
  },
  {
    src: '/images/poe2-soldier.webp',
    alt: "Chaos Trader",
    title: "Elvio Lado",
    description: "Analista de Mercado y Tasas de Cambio"
  },
  {
    src: '/images/poe2-soldier.webp',
    alt: "Divine Guardian",
    title: "Peruvian Machine",
    description: "Seguridad y Soporte a la Comunidad"
  }
];

// Página: Instancia los datos y alimenta el AboutTemplate
export function AboutPage({ navbar, footer }) {
  return (
    <AboutTemplate
      navbar={navbar}
      titles={aboutTitles}
      intros={aboutIntros}
      teamTitle="Nuestro Equipo de Exiliados"
      team={aboutTeam}
      footer={footer}
    />
  );
}
