import { Navbar } from '../organisms/Navbar';
import { Texts } from '../molecules/Texts';
import { Image } from '../atoms/Image';
import { TextImage } from '../molecules/TextImage';

// Template: solo define DÓNDE va cada pieza. No tiene datos propios.
export function HomeTemplate({ navbar, titles, logo, intro }) {
    return (
        <div className="home">
            {/* 1. Barra superior */}
            <Navbar {...navbar} />

            {/* 2. Título y subtítulo */}
            <Texts texts={titles} />

            {/* 3. Logo grande centrado */}
            <Image src={logo.src} alt={logo.alt} />

            {/* 4. Texto de bienvenida + imagen del juego */}
            <TextImage src={intro.src} alt={intro.alt}>
                {intro.content}
            </TextImage>
        </div>
    );
}