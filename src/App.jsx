import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ShopPage } from './pages/ShopPage';
import { CartPage } from './pages/CartPage';
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
import './styles/templates/CartTemplate.css';
import './styles/molecules/TextImage.css';
import './styles/molecules/TextsImages.css';
import './styles/molecules/ImageCards.css';
import './styles/molecules/CartItem.css';
import './styles/organisms/Footer.css';
import './styles/organisms/CartList.css';
import './styles/molecules/ProductCard.css';
import './styles/organisms/ProductList.css';
import './styles/organisms/Formulario.css';

// ── Estado del carrito ──
// El carrito vive en App para que sea accesible desde cualquier página.
// Funciones:
//   addToCart(product)   → agrega 1 unidad; si ya existe, suma qty
//   removeFromCart(name) → quita 1 unidad; si qty llega a 0, elimina el item
//   clearCart()          → vacía el carrito completamente

function App() {
  // ── Carrito ──
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.name === product.name);
      if (exists) {
        return prev.map(item =>
          item.name === product.name
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCart(prev =>
      prev
        .map(item => item.name === name ? { ...item, qty: item.qty - 1 } : item)
        .filter(item => item.qty > 0)
    );
  };

  const clearCart = () => setCart([]);

  // Total de unidades en el carrito (para el badge del navbar)
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // ── Navegación por hash ──
  const getPageFromHash = () => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#inicio')        return 'home';
    if (hash === '#quienes-somos') return 'about';
    if (hash === '#tienda')        return 'shop';
    if (hash === '#carrito')       return 'cart';
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

  // ── Datos compartidos ──
  const navbarData = {
    logo: {
      src: '/images/Path-of-Exile-Logo.webp',
      alt: "Logo del sitio",
      className: "navbar-logo"
    },
    links: [
      { label: "Inicio",        href: "#inicio" }, 
      { label: "Quienes somos", href: "#quienes-somos" },
      { label: "Tienda",        href: "#tienda" },
      // Badge dinámico: muestra la cantidad de items en el carrito
      { label: cartCount > 0 ? `🛒 Carrito (${cartCount})` : "🛒 Carrito", href: "#carrito" }
    ],
    buttons: [
      { label: "Iniciar sesión", onClick: () => { window.location.hash = '#login'; }, className: "btn-gold" },
      { label: "Registrarse",   onClick: () => { window.location.hash = '#registro'; }, className: "btn-white" }
    ]
  };

  const footerData = {
    links: [
      { label: "Términos y condiciones",href: "#terminos" },
      { label: "Privacidad",            href: "#privacidad" },
      { label: "Contacto",              href: "#contacto" }
    ],
    text: "© 2026 Path of Exile Currency Exchange. Todos los derechos reservados."
  };

  return (
    <>
      {currentPage === 'home'     && <HomePage     navbar={navbarData} footer={footerData} />}
      {currentPage === 'about'    && <AboutPage    navbar={navbarData} footer={footerData} />}
      {currentPage === 'shop'     && <ShopPage     navbar={navbarData} footer={footerData} onAddToCart={addToCart} />}
      {currentPage === 'cart'     && <CartPage     navbar={navbarData} footer={footerData} cart={cart} onAdd={addToCart} onRemove={removeFromCart} onClear={clearCart} />}
      {currentPage === 'contact'  && <ContactPage  navbar={navbarData} footer={footerData} />}
      {currentPage === 'privacy'  && <PrivacyPage  navbar={navbarData} footer={footerData} />}
      {currentPage === 'terms'    && <TermsPage    navbar={navbarData} footer={footerData} />}
      {currentPage === 'register' && <RegisterPage navbar={navbarData} footer={footerData} />}
      {currentPage === 'login'    && <LoginPage    navbar={navbarData} footer={footerData} />}
    </>
  );
}

export default App;