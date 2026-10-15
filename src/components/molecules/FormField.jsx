import { Text } from '../atoms/Text';
import { Input } from '../atoms/Input';

// CAMBIO: ahora sacamos "name" de las props para poder usarlo también como id
export function FormField({ label, name, type, value, onChange, placeholder, className = "", ...props }) {
    return (
        <div className={className}>
            {/* CAMBIO: htmlFor conecta la etiqueta con el input que tenga ese mismo id.
                Text pasa "htmlFor" al <label> gracias a ...props */}
            {label && <Text variant="label" htmlFor={name}>{label}</Text>}

            {/* CAMBIO: el input recibe id (para el label) y name (para el formulario) */}
            <Input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
}