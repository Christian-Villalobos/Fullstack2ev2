import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ShopPage } from './pages/ShopPage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

// Estilos globales y modulares
import './styles/global.css';
import './styles/atoms/Button.css';
import './styles/organisms/Navbar.css';
import './styles/templates/HomeTemplate.css';
import './styles/templates/AboutTemplate.css';
import './styles/templates/ContactTemplate.css';
import './styles/templates/LegalTemplate.css';
import './styles/molecules/TextImage.css';
import './styles/molecules/TextsImages.css';
import './styles/molecules/ImageCards.css';
import './styles/organisms/Footer.css';
import './styles/molecules/ProductCard.css';
import './styles/organisms/ProductList.css';
import './styles/organisms/Formulario.css';

// ── Datos compartidos (Navbar y Footer) ──

const navbarData = {
  logo: {
    src: '/images/Path-of-Exile-Logo.webp',
    alt: "Logo del sitio",
    className: "navbar-logo"
  },
  links: [
    { label: "Inicio", href: "#inicio" },
    { label: "Quienes somos", href: "#quienes-somos" },
    { label: "Tienda", href: "#tienda" }
  ],
  buttons: [
    { label: "Iniciar sesión", onClick: () => { window.location.hash = '#login'; }, className: "btn-gold" },
    { label: "Registrarse", onClick: () => { window.location.hash = '#registro'; }, className: "btn-white" }
  ]
};

const footerData = {
  links: [
    { label: "Términos y condiciones", href: "#terminos" },
    { label: "Privacidad", href: "#privacidad" },
    { label: "Contacto", href: "#contacto" }
  ],
  text: "© 2026 Path of Exile Currency Exchange. Todos los derechos reservados."
};

// ── Componente Principal App ──

function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#quienes-somos') return 'about';
    if (hash === '#tienda')        return 'shop';
    if (hash === '#contacto')      return 'contact';
    if (hash === '#privacidad')    return 'privacy';
    if (hash === '#terminos')      return 'terms';
    if (hash === '#registro')      return 'register';
    if (hash === '#login')         return 'login';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => setCurrentPage(getPageFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {currentPage === 'home'     && <HomePage     navbar={navbarData} footer={footerData} />}
      {currentPage === 'about'    && <AboutPage    navbar={navbarData} footer={footerData} />}
      {currentPage === 'shop'     && <ShopPage     navbar={navbarData} footer={footerData} />}
      {currentPage === 'contact'  && <ContactPage  navbar={navbarData} footer={footerData} />}
      {currentPage === 'privacy'  && <PrivacyPage  navbar={navbarData} footer={footerData} />}
      {currentPage === 'terms'    && <TermsPage    navbar={navbarData} footer={footerData} />}
      {currentPage === 'register' && <RegisterPage navbar={navbarData} footer={footerData} />}
      {currentPage === 'login'    && <LoginPage    navbar={navbarData} footer={footerData} />}
    </>
  );
}

export default App;