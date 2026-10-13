import { ShopTemplate } from '../components/templates/ShopTemplate';

const shopTitles = [
  { variant: "h1", content: "Tienda de Divisas", className: "titulo-principal" },
  { variant: "p", content: "Compra y vende los mejores orbes y objetos de Path of Exile con entrega inmediata", className: "subtitulo" }
];

const defaultProducts = [
  { 
    name: "Divine Orb", 
    price: "$2.00 USD", 
    src: "/images/poe2-soldier.webp", 
    alt: "Divine Orb" 
  },
  { 
    name: "Chaos Orb",  
    price: "$0.15 USD", 
    src: "/images/poe2-soldier.webp",  
    alt: "Chaos Orb" 
  },
  { 
    name: "Mirror of Kalandra", 
    price: "$250.00 USD", 
    src: "/images/Path-of-Exile-Logo.webp", 
    alt: "Mirror of Kalandra" 
  },
  { 
    name: "Exalted Orb", 
    price: "$0.50 USD", 
    src: "/images/poe2-soldier.webp", 
    alt: "Exalted Orb" 
  }
];

// Página: Suministra los datos reales al ShopTemplate
export function ShopPage({ navbar, footer }) {
  return (
    <ShopTemplate
      navbar={navbar}
      titles={shopTitles}
      products={defaultProducts}
      footer={footer}
    />
  );
}