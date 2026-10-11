import { Image } from '../atoms/Image';
import { Button } from '../atoms/Button';
import { NavLinks } from '../molecules/Navlinks';

// Organismo: une logo + enlaces + botón (opcional)
export function Navbar({ logo, links = [], buttonText, onButtonClick, className = '' }) {
    return (
        // <nav> es la etiqueta semántica para barras de navegación
        <nav className={`navbar ${className}`}>
            {/* El logo solo se muestra si se pasa */}
            {logo && <Image src={logo.src} alt={logo.alt} />}

            <NavLinks links={links} />

            {/* El botón solo se muestra si se pasa un texto */}
            {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
        </nav>
    );
}

