export function Text({ children, variant = 'p', className = '', ...props  
//props se usa para recibir parametros adicionales que se le pasen al componente. Ejemplo: agregar un id al atomo cuando lo uses
}) {
    const Component = variant;

    return (
        <Component className={className} {...props}>
            {children}
        </Component>
    );
}