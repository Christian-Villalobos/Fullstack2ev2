import { ProductCard } from '../molecules/ProductCard';

// Organismo: renderiza TODOS los productos a la venta
// onAddToCart llega desde App.jsx via ShopPage → ShopTemplate → ProductList
export function ProductList({ products = [], onAddToCart, className = '' }) {
    return (
        <div className={`product-list ${className}`}>
            {products.map((product) => (
                <ProductCard
                    key={product.name}
                    src={product.src}
                    alt={product.alt}
                    name={product.name}
                    price={product.price}
                    onBuy={() => onAddToCart && onAddToCart(product)}
                />
            ))}
        </div>
    );
}