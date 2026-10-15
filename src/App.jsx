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
import { ProfilePage } from './pages/ProfilePage';
import { getCurrentUser, logoutUser } from './services/auth';
import { getCart, saveCart } from './services/cart';            // NUEVO

// Estilos globales y modulares
import './styles/global.css';
import './styles/atoms/Button.css';
import './styles/organisms/Navbar.css';
import './styles/templates/HomeTemplate.css';
import './styles/templates/AboutTemplate.css';
import './styles/templates/ContactTemplate.css';
import './styles/templates/LegalTemplate.css';
import './styles/templates/CartTemplate.css';
import './styles/templates/ProfileTemplate.css';
import './styles/molecules/TextImage.css';
import './styles/molecules/TextsImages.css';
import './styles/molecules/ImageCards.css';
import './styles/molecules/CartItem.css';
import './styles/organisms/Footer.css';
import './styles/organisms/CartList.css';
import './styles/molecules/ProductCard.css';
import './styles/organisms/ProductList.css';
import './styles/organisms/Formulario.css';
import './styles/organisms/ProfileCard.css';
import './styles/organisms/UserList.css';

function App() {
  // ── Sesión ──
  // currentUser guarda quién inició sesión (null si nadie).
  // Va antes del carrito porque el carrito necesita saber si hay sesión.
  const [currentUser, setCurrentUser] = useState(getCurrentUser);

  // ── Estado del carrito ──
  // El carrito vive en App para que sea accesible desde cualquier página.
  // Funciones:
  //   addToCart(product)   → agrega 1 unidad; si ya existe, suma qty (solo con sesión iniciada)
  //   removeFromCart(name) → quita 1 unidad; si qty llega a 0, elimina el item
  //   clearCart()          → vacía el carrito completamente

  // CAMBIO: el carrito ahora empieza con lo que haya guardado en localStorage,
  // pero solo si hay una sesión iniciada. Si no hay sesión, empieza vacío.
  const [cart, setCart] = useState(() => (currentUser ? getCart() : []));

  // NUEVO: cada vez que "cart" cambia (agregar, quitar, vaciar), lo guardamos en localStorage.
  // El [cart] del final significa: "ejecuta esto solo cuando cart cambie".
  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addToCart = (product) => {
    // Si no hay sesión iniciada, no dejamos comprar.
    // Avisamos, llevamos a la persona al login y salimos de la función con return.
    if (!currentUser) {
      alert('Debes iniciar sesión para comprar.');
      window.location.hash = '#login';
      return;
    }

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

  // Cierra la sesión, actualiza el navbar y vuelve al inicio
  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    clearCart();                    // Al cerrar sesión se vacía el carrito (y el useEffect lo guarda vacío)
    window.location.hash = '#inicio';
  };

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
    if (hash === '#perfil')        return 'profile';

    // Si el hash no coincide con ninguno (o está vacío), mostramos home
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      // Cada vez que se cambia de página, revisamos si hay sesión iniciada
      setCurrentUser(getCurrentUser());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // ── Datos compartidos ──
  const navbarData = {
    logo: {
      src: '/images/logo.webp',
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
    // Los botones cambian según haya o no una sesión iniciada
    buttons: currentUser
      ? [
          { label: "Mi perfil",      onClick: () => { window.location.hash = '#perfil'; }, className: "btn-gold" },
          { label: "Cerrar sesión",  onClick: handleLogout,                                className: "btn-white" }
        ]
      : [
          { label: "Iniciar sesión", onClick: () => { window.location.hash = '#login'; },    className: "btn-gold" },
          { label: "Registrarse",    onClick: () => { window.location.hash = '#registro'; }, className: "btn-white" }
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
      {currentPage === 'profile'  && <ProfilePage  navbar={navbarData} footer={footerData} />}
    </>
  );
}

export default App;