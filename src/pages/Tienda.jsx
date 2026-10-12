import {TiendaTemplate} from '../components/templates/TiendaTemplate'

{/*Importar estilos*/}



{/*Contenido*/}
{/*Barra de navegación*/}
const navbarData = {
  logo: {
    src: '/images/Path-of-Exile-Logo.webp',
    alt: "Logo del sitio",
    className: "navbar-logo"
  },
  links: [
    { label: "Inicio", href: "#inicio" },
    { label: "Quienes somos", href: "#Quienes-somos" },
    { label: "Tienda", href: "#Tienda" },
    { label: "Contacto", href: "#contacto" }
  ],
  buttons: [
    { label: "Iniciar sesión", onClick: () => alert("Iniciar sesión"), className: "btn-gold" },
    { label: "Registrarse", onClick: () => alert("Registrarse"), className: "btn-white" }
  ]
};
{/*Titulos*/}

const titlesData = [
  { variant: "h1", content: "Path of Exile - Currency Exchange", className: "titulo-principal" },
  { variant: "p", content: "Tienda de divisas para Path of Exile", className: "subtitulo" }
];

const introData = [
  {
    src: '/images/poe2-soldier.webp',
    alt: "Mercado de divisas Path of Exile",
    content: "Bienvenido a la tienda de divisas para Path of Exile. Encuentra Divine Orbs, Chaos Orbs, Mirror of Kalandra y comercia directamente con otros jugadores con máxima confianza."
  }
];

function App() {
  return (
    <TiendaTemplate
      navbar={navbarData}
      titles={titlesData}
      intros={introData}
      footer={footerData}
    />
  )
}

export default App
