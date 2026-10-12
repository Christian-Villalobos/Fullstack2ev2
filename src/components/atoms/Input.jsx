export function Input({ className,type = 'text', placeholder = '', value , onChange, ...props }) {
    return (
        <input
            className={className}
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            {...props}
        />
    );
}