import { Text } from '../atoms/Text';
import { NavLinks } from '../molecules/NavLinksTemp';

// Organismo: texto (opcional) + enlaces (opcionales)
// Ejemplo de links: [{ label: 'Términos', href: '#terminos' }]
export function Footer({ text, links = [], className = '' }) {
    return (
        <footer className={`footer ${className}`}>
            {/* Los enlaces solo se muestran si hay al menos uno */}
            {links.length > 0 && <NavLinks links={links} />}

            {/* El texto solo se muestra si se pasa */}
            {text && <Text variant="p">{text}</Text>}
        </footer>
    );
}