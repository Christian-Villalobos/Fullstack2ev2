import { ShopTemplate } from '../components/templates/ShopTemplate';

const shopTitles = [
  { variant: "h1", content: "Tienda de Divisas", className: "titulo-principal" },
  { variant: "p", content: "Compra y vende los mejores orbes y objetos de Path of Exile con entrega inmediata", className: "subtitulo" }
];

const defaultProducts = [
  { name: "Divine Orb",        price: "$2.00 USD",   src: "/images/divine.webp",         alt: "Divine Orb" },
  { name: "Chaos Orb",         price: "$0.15 USD",   src: "/images/chaos.webp",         alt: "Chaos Orb" },
  { name: "Mirror of Kalandra",price: "$250.00 USD", src: "/images/mirror.webp",   alt: "Mirror of Kalandra" },
  { name: "Exalted Orb",       price: "$0.50 USD",   src: "/images/exalted.webp",         alt: "Exalted Orb" }
];

// Página: Recibe onAddToCart desde App.jsx y lo pasa al template
export function ShopPage({ navbar, footer, onAddToCart }) {
  return (
    <ShopTemplate
      navbar={navbar}
      titles={shopTitles}
      products={defaultProducts}
      onAddToCart={onAddToCart}
      footer={footer}
    />
  );
}