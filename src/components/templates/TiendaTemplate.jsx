import { Navbar } from '../organisms/Navbar';
import { Texts } from '../molecules/Texts';
import { TextsImages } from '../molecules/TextsImages';
import { Footer } from '../organisms/Footer';

export function TiendaTemplate({ navbar, titles, intros, footer }) {
    return (
        <div className="Tienda">
            {/* 1. Barra superior */}
            <Navbar {...navbar} />

            {/* 2. Título y subtítulo */}
            <Texts texts={titles} />

            {/* 3. Lista de bloques texto + imagen.
                TextsImages recorre el arreglo y crea un TextImage por cada elemento */}
            <TextsImages textsImages={intros} />

            {/* 4. Footer */}
            {footer && <Footer {...footer} />}
        </div>
    );
}

