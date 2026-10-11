import { Button } from '../atoms/Button';

// Molécula: muestra varios botones juntos
// Ejemplo de buttons: [{ label: 'Registrarse', onClick: funcion, className: 'btn-gold' }]
export function ButtonGroup({ buttons = [], className = '' }) {
    return (
        <div className={`button-group ${className}`}>
            {/* Recorremos el arreglo y creamos un botón por cada elemento */}
            {buttons.map((button) => (
                <Button
                    key={button.label}
                    onClick={button.onClick}
                    className={button.className}
                >
                    {button.label}
                </Button>
            ))}
        </div>
    );
}