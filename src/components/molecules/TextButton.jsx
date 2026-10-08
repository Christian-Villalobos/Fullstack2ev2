import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export function TextButton({ text, buttonText, onClick }) {
    return (
        <div className="text-button">
            <Text>{text}</Text>
            <Button onClick={onClick}>{buttonText}</Button>
        </div>
    );
}
