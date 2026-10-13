import { ProductCard } from '../molecules/ProductCard';

// Organismo: muestra TODOS los objetos a la venta
// Ejemplo de products: [{ name: 'Divine Orb', price: '$2', src: '...', alt: '...' }]
export function ProductList({ products = [], className = '' }) {
    return (
        <div className={`product-list ${className}`}>
            {/* Recorremos el arreglo y creamos una tarjeta por cada objeto */}
            {products.map((product) => (
                <ProductCard
                    key={product.name}   // el nombre sirve de key mientras sea único
                    src={product.src}
                    alt={product.alt}
                    name={product.name}
                    price={product.price}
                    onBuy={() => alert(`Compraste: ${product.name}`)}
                />
            ))}
        </div>
    );
}