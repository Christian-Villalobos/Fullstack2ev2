import { Navbar } from '../organisms/Navbar';
import { Texts } from '../molecules/Texts';
import { ProductList } from '../organisms/ProductList';
import { Footer } from '../organisms/Footer';

// Template: solo define DÓNDE va cada pieza. No tiene datos propios.
// onAddToCart se pasa hacia abajo hasta ProductCard
export function ShopTemplate({ navbar, titles, products, onAddToCart, footer }) {
    return (
        <div className="home">
            {/* 1. Barra superior */}
            <Navbar {...navbar} />

            {/* 2. Título y subtítulo */}
            <Texts texts={titles} />

            {/* 3. Lista de productos */}
            <ProductList products={products} onAddToCart={onAddToCart} />

            {/* 4. Footer */}
            {footer && <Footer {...footer} />}
        </div>
    );
}
