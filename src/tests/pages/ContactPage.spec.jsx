import { render, screen, fireEvent } from '@testing-library/react';
import { ContactPage } from '../../pages/ContactPage';

describe('ContactPage', () => {
  it('muestra el título, las tarjetas y los campos del formulario', () => {
    render(<ContactPage navbar={{}} />);

    expect(screen.getByRole('heading', { level: 1, name: 'Contacto y Soporte' })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 3, name: 'Soporte 24/7' })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 3, name: 'Comunidad Oficial' })).toBeTruthy();

    expect(screen.getByLabelText('Nombre o IGN (In-Game Name)')).toBeTruthy();
    expect(screen.getByLabelText('Correo electrónico')).toBeTruthy();
    expect(screen.getByLabelText('Asunto')).toBeTruthy();
    expect(screen.getByLabelText('Mensaje')).toBeTruthy();
  });

  it('al enviar agradece usando el nombre escrito', () => {
    spyOn(window, 'alert');
    render(<ContactPage navbar={{}} />);

    fireEvent.change(screen.getByLabelText('Nombre o IGN (In-Game Name)'), { target: { value: 'Ana' } });
    fireEvent.click(screen.getByRole('button', { name: 'Enviar Mensaje' }));

    expect(window.alert).toHaveBeenCalledWith(
      '¡Gracias por contactarnos, Ana! Tu mensaje ha sido enviado correctamente.'
    );
  });

  it('si no hay nombre, usa "exiliado"', () => {
    spyOn(window, 'alert');
    render(<ContactPage navbar={{}} />);

    fireEvent.click(screen.getByRole('button', { name: 'Enviar Mensaje' }));

    expect(window.alert).toHaveBeenCalledWith(
      '¡Gracias por contactarnos, exiliado! Tu mensaje ha sido enviado correctamente.'
    );
  });
});