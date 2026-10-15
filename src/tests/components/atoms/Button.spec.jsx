import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../../components/atoms/Button';

describe('Button', () => {
  it('muestra su texto y ejecuta onClick', () => {
    const onClick = jasmine.createSpy('onClick');
    render(<Button className="btn-gold" onClick={onClick}>Comprar</Button>);

    const btn = screen.getByRole('button', { name: 'Comprar' });
    expect(btn).toHaveClass('btn-gold');

    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});