import { render, screen, fireEvent } from '@testing-library/react';
import { TextButton } from '../../../components/molecules/TextButton';

describe('TextButton', () => {
  it('muestra el texto y el botón', () => {
    render(<TextButton text="¿Listo?" buttonText="Aceptar" onClick={() => {}} />);
    expect(screen.getByText('¿Listo?')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Aceptar' })).toBeTruthy();
  });

  it('ejecuta onClick al presionar el botón', () => {
    const onClick = jasmine.createSpy('onClick');
    render(<TextButton text="x" buttonText="Aceptar" onClick={onClick} />);
    fireEvent.click(screen.getByRole('button', { name: 'Aceptar' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});