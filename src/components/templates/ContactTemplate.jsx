import { Navbar } from '../organisms/Navbar';
import { Texts } from '../molecules/Texts';
import { Formulario } from '../organisms/Formulario';
import { ImageCards } from '../molecules/ImageCards';
import { Footer } from '../organisms/Footer';

// Template: solo define DÓNDE va cada pieza en la vista de Contacto
export function ContactTemplate({ navbar, titles, form, contactCards, footer }) {
    return (
        <div className="contact-template">
            {/* 1. Barra superior */}
            <Navbar {...navbar} />

            {/* 2. Título y subtítulo */}
            {titles && <Texts texts={titles} />}

            {/* 3. Tarjetas informativas de canales o soporte (opcional) */}
            {contactCards && <ImageCards items={contactCards} className="contact-cards" />}

            {/* 4. Formulario de contacto */}
            {form && <Formulario {...form} />}

            {/* 5. Footer */}
            {footer && <Footer {...footer} />}
        </div>
    );
}
