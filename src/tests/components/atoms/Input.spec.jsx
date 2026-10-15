import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../../../components/atoms/Input';

describe('Input', () => {
  it('muestra el placeholder y el tipo indicado', () => {
    render(<Input type="email" placeholder="tu@correo.com" value="" onChange={() => {}} />);
    const input = screen.getByPlaceholderText('tu@correo.com');
    expect(input.type).toBe('email');
  });

  it('ejecuta onChange al escribir', () => {
    const onChange = jasmine.createSpy('onChange');
    render(<Input placeholder="x" value="" onChange={onChange} />);
    fireEvent.change(screen.getByPlaceholderText('x'), { target: { value: 'a' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});