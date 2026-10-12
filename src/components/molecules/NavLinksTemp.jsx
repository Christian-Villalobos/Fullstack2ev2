import { Link } from '../atoms/Link';

// Molécula: recibe un arreglo de enlaces y los muestra como lista
// Ejemplo de links: [{ label: 'Inicio', href: '/' }, { label: 'Contacto', href: '/contacto' }]
export function NavLinks({ links = [], className = '' }) {
    return (
        <ul className={className}>
            {links.map((link) => (
                // Cada enlace va dentro de un <li>; el href sirve como key porque es único
                <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                </li>
            ))}
        </ul>
    );
}