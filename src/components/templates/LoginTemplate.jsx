import {Formulario} from '../organisms/Formulario'
import { Navbar } from '../organisms/Navbar'
import { Footer } from '../organisms/Footer'
import { Texts } from '../molecules/Texts'

export function LoginTemplate({ navbar, texts, form, footer }) {
    return (
        <div className="login">
            <Navbar {...navbar} />
            <Texts texts={texts} />
            <Formulario {...form} />
            {footer && <Footer {...footer} />}
        </div>
    );
}
