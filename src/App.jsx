import { HomeTemplate } from './components/templates/HomeTemplate'
import './styles/global.css'
import './styles/atoms/Button.css'
import './styles/organisms/Navbar.css'
import './styles/templates/HomeTemplate.css'
import './styles/molecules/TextImage.css'
import './styles/molecules/TextsImages.css'
import './styles/organisms/Footer.css'

// ── Datos que alimentan el HomeTemplate ──

const navbarData = {
  logo: {
    src: '/images/Path-of-Exile-Logo.webp',
    alt: "Logo del sitio",
    className: "navbar-logo"
  },
  links: [
    { label: "Inicio", href: "#" },
    { label: "Comprar", href: "#comprar" },
    { label: "Vender", href: "#vender" },
    { label: "Contacto", href: "#contacto" }
  ],
  buttons: [
    { label: "Iniciar sesión", onClick: () => alert("Iniciar sesión"), className: "btn-gold" },
    { label: "Registrarse", onClick: () => alert("Registrarse"), className: "btn-white" }
  ]
};

const titlesData = [
  { variant: "h1", content: "Path of Exile - Currency Exchange", className: "titulo-principal" },
  { variant: "p", content: "Compra y vende orbes y divisas de forma rápida y segura", className: "subtitulo" }
];

const logoData = {
  src: '/images/Path-of-Exile-Logo.webp',
  alt: "Logo Path of Exile",
  className: "logo"
};

const introData = [
  {
    src: '/images/poe2-soldier.webp',
    alt: "Mercado de divisas Path of Exile",
    content: "Bienvenido a la plataforma de intercambio de divisas para Path of Exile. Encuentra Divine Orbs, Chaos Orbs, Mirror of Kalandra y comercia directamente con otros jugadores con máxima confianza."
  },
  // Para agregar otro bloque, solo añade otro objeto a la lista:
  {
    src: '/images/poe2-soldier.webp',   // aquí puedes poner otra imagen
    alt: "Compra segura",
    content: "Todas las transacciones son rápidas y seguras. Compra y vende sin complicaciones.",
    className: "reverse"  // Esta clase hará que la imagen y el texto se inviertan en el diseño
  }
];

const footerData = {
  links: [
    { label: "Términos y condiciones", href: "#terminos"},
    { label: "Privacidad", href: "#privacidad" },
    { label: "Contacto", href: "#contacto" }
  ],
  text: "© 2026 Path of Exile Currency Exchange. Todos los derechos reservados."
};


// ── Componente App ──

function App() {
  return (
    <HomeTemplate
      navbar={navbarData}
      titles={titlesData}
      logo={logoData}
      intros={introData}
      footer={footerData}
    />
  )
}

export default App
