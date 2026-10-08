import { ImageCard } from './ImageCard';

export function ImageCards({ items = [], className = '' }) {
    return (
        <div className={`image-cards-container ${className}`}>
            {items.map((item, index) => (
                <ImageCard 
                    key={index} 
                    src={item.src} 
                    alt={item.alt} 
                    title={item.title} 
                    description={item.description} 
                />
            ))}
        </div>
    );
}
