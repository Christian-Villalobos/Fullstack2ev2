import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';

export function ButtonInput({ buttonText, inputPlaceholder, onButtonClick, onInputChange }) {
    return (
        <div className="button-input">
            <Input 
                type="text" 
                placeholder={inputPlaceholder} 
                onChange={onInputChange} 
            />
            <Button onClick={onButtonClick}>
                {buttonText}
            </Button>
        </div>
    );
}
