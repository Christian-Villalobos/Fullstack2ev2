import { FormField } from '../molecules/FormField'
import { Button } from '../atoms/Button'
import { useState } from 'react'

export function Formulario({ fields = [], onSubmit, buttonText = "Enviar", className = "" }) {

    const [formData, setFormData] = useState({});

    const handleChange = (name) => (e) => {
        setFormData(prev => ({
            ...prev,
            [name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();      // evita la recarga de la página
        onSubmit?.(formData);    // entrega los datos al padre
    };

    return (
        <form onSubmit={handleSubmit} className={className}>
            {fields.map((field, index) => (
                <FormField
                    key={field.name || index}
                    {...field}
                    value={formData[field.name] || ''}
                    onChange={handleChange(field.name)}
                />
            ))}
            <Button type="submit">{buttonText}</Button>
        </form>
    );
}