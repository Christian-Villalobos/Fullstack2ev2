import { Text } from '../atoms/Text';
import { Input } from '../atoms/Input';

export function FormField({ label, type, value, onChange, placeholder,className = "",...props  
}) {
    return (
        <div className={className}>
            {label && <Text variant="label">{label}</Text>}
            <Input 
                type={type} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder} 
                {...props} 
            />
        </div>
    );
}