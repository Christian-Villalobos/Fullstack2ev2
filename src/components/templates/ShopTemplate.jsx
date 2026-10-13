import { Navbar } from '../organisms/Navbar';
import { Texts } from '../molecules/Texts';
import { ProductList } from '../organisms/ProductList';
import { Footer } from '../organisms/Footer';

// Template: solo define DÓNDE va cada pieza. No tiene datos propios.
export function ShopTemplate({ navbar, titles, products, footer }) {
    return (
        <div className="home">
            {/* 1. Barra superior (reutilizamos la misma) */}
            <Navbar {...navbar} />

            {/* 2. Título y subtítulo de la tienda */}
            <Texts texts={titles} />

            {/* 3. Lista de objetos a la venta */}
            <ProductList products={products} />
            {/* 4. Footer */}
            {footer && <Footer {...footer} />}
        </div>
    );
}
