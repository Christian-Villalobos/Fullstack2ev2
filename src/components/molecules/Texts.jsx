import { Text } from '../atoms/Text';

export function Texts({ texts = [] }) {
    return (
        <div className="texts">
            {texts.map((text, index) => (
                <Text key={index} variant={text.variant} className={text.className}>
                    {text.content}
                </Text>
            ))}
        </div>
    );
}