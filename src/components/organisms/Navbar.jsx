import { Image } from '../atoms/Image';
import { ButtonGroup } from '../molecules/ButtonGroup';
import { NavLinks } from '../molecules/NavLinksTemp';

// Organismo: logo (opcional) + enlaces (opcionales) + botones (opcionales)
export function Navbar({ logo, links = [], buttons = [], className = '' }) {
    return (
        <nav className={`navbar ${className}`}>
            {/* El logo solo se muestra si se pasa */}
            {logo && <Image src={logo.src} alt={logo.alt} />}

            {/* Los enlaces solo se muestran si hay al menos uno */}
            {links.length > 0 && <NavLinks links={links} />}

            {/* Los botones solo se muestran si hay al menos uno */}
            {buttons.length > 0 && <ButtonGroup buttons={buttons} />}
        </nav>
    );
}