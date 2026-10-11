import { Text } from '../atoms/Text';
import { Image } from '../atoms/Image';

// Molécula: texto a un lado, imagen al otro (el orden lo define el CSS)
// children: el contenido del texto (puede llevar <strong>, <span>, etc.)
export function TextImage({ children, src, alt, className = '' }) {
    return (
        <div className={`text-image ${className}`}>
            <Text variant="p">{children}</Text>
            <Image src={src} alt={alt} />
        </div>
    );
}