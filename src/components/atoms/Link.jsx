// Átomo que representa un enlace (<a>)
// href: a dónde lleva el enlace
// ...props: permite pasar otros atributos (id, target, etc.)
export function Link({ href = '#', children, className = '', ...props }) {
    return (
        <a href={href} className={className} {...props}>
            {children}
        </a>
    );
}