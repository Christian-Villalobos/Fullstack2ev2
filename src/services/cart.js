// Aquí se guarda y se lee el carrito desde localStorage.
// localStorage solo guarda texto, por eso usamos JSON.stringify (objeto → texto)
// y JSON.parse (texto → objeto).

// Nombre con el que se guarda el carrito en el navegador
const CART_KEY = "poe_cart";

// Devuelve el carrito guardado.
// Si todavía no hay nada guardado, devuelve una lista vacía.
export function getCart() {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
}

// Guarda el carrito completo en localStorage
export function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}