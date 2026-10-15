import { render, screen, fireEvent } from '@testing-library/react';
import { Formulario } from '../../../components/organisms/Formulario';

describe('Formulario', () => {
  const fields = [
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Contraseña', type: 'password', name: 'password' },
  ];

  it('entrega los datos escritos al enviar', () => {
    const onSubmit = jasmine.createSpy('onSubmit');
    render(<Formulario fields={fields} buttonText="Entrar" onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'a@b.com' } });
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: '123' } });
    fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));

    expect(onSubmit).toHaveBeenCalledWith({ email: 'a@b.com', password: '123' });
  });

  it('el botón dice "Enviar" por defecto', () => {
    render(<Formulario fields={fields} />);
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeTruthy();
  });

  it('muestra un campo por cada elemento de fields', () => {
    render(<Formulario fields={fields} />);
    expect(screen.getByLabelText('Email')).toBeTruthy();
    expect(screen.getByLabelText('Contraseña')).toBeTruthy();
  });

  it('el valor escrito se refleja en el campo', () => {
    render(<Formulario fields={fields} />);
    const email = screen.getByLabelText('Email');
    fireEvent.change(email, { target: { value: 'x@y.com' } });
    expect(email.value).toBe('x@y.com');
  });

  it('enviar sin onSubmit no lanza errores', () => {
    render(<Formulario fields={fields} />);
    expect(() => fireEvent.click(screen.getByRole('button', { name: 'Enviar' }))).not.toThrow();
  });
});