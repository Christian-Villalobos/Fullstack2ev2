import { HomeTemplate } from '../components/templates/HomeTemplate';

const defaultTitles = [
  { variant: "h1", content: "Path of Exile - Currency Exchange", className: "titulo-principal" },
  { variant: "p", content: "Compra y vende orbes y divisas de forma rápida y segura", className: "subtitulo" }
];

const defaultLogo = {
  src: '/images/logo.webp',
  alt: "Logo Path of Exile",
  className: "logo"
};

const defaultIntros = [
  {
    src: '/images/poe2-soldier.webp',
    alt: "Mercado de divisas Path of Exile",
    content: "Bienvenido a la plataforma de intercambio de divisas para Path of Exile. Encuentra Divine Orbs, Chaos Orbs, Mirror of Kalandra y comercia directamente con otros jugadores con máxima confianza."
  },
  {
    src: '/images/pathfinder.webp',
    alt: "Compra segura",
    content: "Todas las transacciones son rápidas y seguras. Compra y vende sin complicaciones con soporte 24/7.",
    className: "reverse"
  }
];

// Página: En Atomic Design, la página es la instancia que suministra
// los datos reales específicos al template.
export function HomePage({ navbar, footer }) {
  return (
    <HomeTemplate
      navbar={navbar}
      titles={defaultTitles}
      logo={defaultLogo}
      intros={defaultIntros}
      footer={footer}
    />
  );
}
