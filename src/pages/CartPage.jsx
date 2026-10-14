import { CartTemplate } from '../components/templates/CartTemplate';

const cartTitles = [
    { variant: "h1", content: "Mi Carrito", className: "titulo-principal" },
    { variant: "p", content: "Revisa tus orbes antes de finalizar el intercambio", className: "subtitulo" }
];

// Página: Recibe el estado del carrito y las funciones desde App.jsx
export function CartPage({ navbar, footer, cart, onAdd, onRemove, onClear }) {
    return (
        <CartTemplate
            navbar={navbar}
            titles={cartTitles}
            cart={cart}
            onAdd={onAdd}
            onRemove={onRemove}
            onClear={onClear}
            footer={footer}
        />
    );
}
