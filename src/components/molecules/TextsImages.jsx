import {TextImage} from '../molecules/TextImage';

export function TextsImages({ textsImages = [], className = '' }) {
    return (
        <div className={`texts-images ${className}`}>
            {textsImages.map((item, index) => (
                <TextImage key={index} src={item.src} alt={item.alt} className={item.className}>
                    {item.content}
                </TextImage>
            ))}
        </div>
    );
}