import {FormField} from '../molecules/FormField'
import {Button} from '../atoms/Button'
import {useState} from 'react'

export function Formulario({ fields = [], onSubmit, buttonText = "Enviar", className = "" 
}) {

    const[formData, setFormData] = useState({});

    const handleChange = (name) => (e) => {
        setFormData(prev => ({
            ...prev,
            [name]: e.target.value
        }));
    };

    return (
        <form onSubmit={onSubmit} className={className}>
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