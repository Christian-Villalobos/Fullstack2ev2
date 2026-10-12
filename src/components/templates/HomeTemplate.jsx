import { Navbar } from '../organisms/Navbar';
import { Texts } from '../molecules/Texts';
import { Image } from '../atoms/Image';
import { TextsImages } from '../molecules/TextsImages';
import { Footer } from '../organisms/Footer';

// Template: solo define DÓNDE va cada pieza. No tiene datos propios.
// Cambio: la prop "intro" ahora se llama "intros" (plural) porque será una lista.
export function HomeTemplate({ navbar, titles, logo, intros, footer }) {
    return (
        <div className="home">
            {/* 1. Barra superior */}
            <Navbar {...navbar} />

            {/* 2. Título y subtítulo */}
            <Texts texts={titles} />

            {/* 3. Logo grande centrado */}
            <Image src={logo.src} alt={logo.alt} className="block mx-auto w-72 max-w-full h-auto" />

            {/* 4. Lista de bloques texto + imagen.
                TextsImages recorre el arreglo y crea un TextImage por cada elemento */}
            <TextsImages textsImages={intros} />

            {/* 5. Footer */}
            {footer && <Footer {...footer} />}
        </div>
    );
}