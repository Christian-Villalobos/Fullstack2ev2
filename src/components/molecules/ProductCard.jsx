import { Image } from '../atoms/Image';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

// Molécula: representa UN objeto a la venta
// Recibe sus datos por props (no tiene datos propios)
export function ProductCard({ src, alt, name, price, onBuy }) {
    return (
        <div className="product-card">
            {/* Imagen del objeto */}
            <Image src={src} alt={alt} />

            {/* Nombre del objeto */}
            <Text variant="h3">{name}</Text>

            {/* Precio del objeto */}
            <Text variant="p" className="product-price">{price}</Text>

            {/* Botón de compra: ejecuta la función que le pasen */}
            <Button className="btn-gold" onClick={onBuy}>
                Comprar
            </Button>
        </div>
    );
}