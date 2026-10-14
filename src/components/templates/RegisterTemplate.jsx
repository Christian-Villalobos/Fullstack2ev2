import { Navbar } from '../organisms/Navbar';
import { Formulario } from '../organisms/Formulario';
import { Footer } from '../organisms/Footer';
import { Texts } from '../molecules/Texts';

export function RegisterTemplate({ navbar,texts, form, footer }) {
    return (
        <div className="register">
            {/* 1. Barra superior */}
            <Navbar {...navbar} />
            {/* 1.5 Título y subtítulo */}
            <Texts texts={texts} />
            {/* 2. Formulario de registro */}
            <Formulario {...form} />
            {/* 3. Footer */}
            {footer && <Footer {...footer} />}
        </div>
    );
}

