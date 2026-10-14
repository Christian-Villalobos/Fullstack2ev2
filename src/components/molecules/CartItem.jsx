import { Image } from '../atoms/Image';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

// Molécula: representa UNA fila del carrito con imagen, nombre, precio, qty y controles
export function CartItem({ src, alt, name, price, qty, onAdd, onRemove }) {
    return (
        <div className="cart-item">
            {/* Imagen del orbe */}
            <Image src={src} alt={alt} className="cart-item-img" />

            {/* Info del producto */}
            <div className="cart-item-info">
                <Text variant="h3" className="cart-item-name">{name}</Text>
                <Text variant="p" className="cart-item-price">{price}</Text>
            </div>

            {/* Controles de cantidad */}
            <div className="cart-item-controls">
                <Button className="btn-qty" onClick={onRemove}>−</Button>
                <Text variant="span" className="cart-item-qty">{qty}</Text>
                <Button className="btn-qty" onClick={onAdd}>+</Button>
            </div>
        </div>
    );
}
