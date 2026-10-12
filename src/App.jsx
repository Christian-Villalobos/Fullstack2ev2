import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

// Estilos globales y modulares
import './styles/global.css';
import './styles/atoms/Button.css';
import './styles/organisms/Navbar.css';
import './styles/templates/HomeTemplate.css';
import './styles/templates/AboutTemplate.css';
import './styles/molecules/TextImage.css';
import './styles/molecules/TextsImages.css';
import './styles/molecules/ImageCards.css';
import './styles/organisms/Footer.css';

// ── Datos compartidos (Navbar y Footer) ──

const navbarData = {
  logo: {
    src: '/images/Path-of-Exile-Logo.webp',
    alt: "Logo del sitio",
    className: "navbar-logo"
  },
  links: [
    { label: "Inicio", href: "#" },
    { label: "Quiénes Somos", href: "#quienes-somos" },
    { label: "Tienda", href: "#tienda" },
    { label: "Contacto", href: "#contacto" }
  ],
  buttons: [
    { label: "Iniciar sesión", onClick: () => alert("Iniciar sesión"), className: "btn-gold" },
    { label: "Registrarse", onClick: () => alert("Registrarse"), className: "btn-white" }
  ]
};

const footerData = {
  links: [
    { label: "Inicio", href: "#" },
    { label: "Términos y condiciones", href: "#terminos" },
    { label: "Privacidad", href: "#privacidad" },
    { label: "Contacto", href: "#contacto" }
  ],
  text: "© 2026 Path of Exile Currency Exchange. Todos los derechos reservados."
};

// ── Componente Principal App ──

function App() {
  // Manejo de navegación simple por hash (#quienes-somos o #)
  const [currentPage, setCurrentPage] = useState(() => 
    window.location.hash === '#quienes-somos' ? 'about' : 'home'
  );

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#quienes-somos') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {currentPage === 'about' ? (
        <AboutPage navbar={navbarData} footer={footerData} />
      ) : (
        <HomePage navbar={navbarData} footer={footerData} />
      )}
    </>
  );
}

export default App;
