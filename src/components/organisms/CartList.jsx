import { CartItem } from '../molecules/CartItem';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

// Organismo: lista completa del carrito + total + botón de vaciar y finalizar
export function CartList({ cart = [], onAdd, onRemove, onClear }) {

    // Calcula el total sumando precio * qty de cada producto
    const total = cart.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', '').replace(' USD', ''));
        return sum + price * item.qty;
    }, 0);

    // Si el carrito está vacío, mostramos un mensaje
    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <Text variant="p" className="cart-empty-text">
                    Tu carrito está vacío. ¡Ve a la tienda y agrega algunos orbes!
                </Text>
                <Button
                    className="btn-gold"
                    onClick={() => { window.location.hash = '#tienda'; }}
                >
                    Ir a la Tienda
                </Button>
            </div>
        );
    }

    return (
        <div className="cart-list">
            {/* Fila por cada producto */}
            {cart.map((item) => (
                <CartItem
                    key={item.name}
                    src={item.src}
                    alt={item.alt}
                    name={item.name}
                    price={item.price}
                    qty={item.qty}
                    onAdd={() => onAdd(item)}
                    onRemove={() => onRemove(item.name)}
                />
            ))}

            {/* Total y acciones */}
            <div className="cart-summary">
                <Text variant="p" className="cart-total">
                    Total: <strong>${total.toFixed(2)} USD</strong>
                </Text>
                <div className="cart-actions">
                    <Button className="btn-white" onClick={onClear}>
                        Vaciar carrito
                    </Button>
                    <Button
                        className="btn-gold"
                        onClick={() => {
                            alert('¡Gracias por tu compra, exiliado! Tu pedido está en camino.');
                            onClear();
                        }}
                    >
                        Finalizar compra
                    </Button>
                </div>
            </div>
        </div>
    );
}
