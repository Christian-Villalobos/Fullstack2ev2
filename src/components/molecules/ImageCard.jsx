import { Image } from '../atoms/Image';
import { Text } from '../atoms/Text';

export function ImageCard({ src, alt, title, description }) {
    return (
        <div className="image-card">
            <Image src={src} alt={alt} />
            <Text variant="h3">{title}</Text>
            <Text variant="p">{description}</Text>
        </div>
    );
}