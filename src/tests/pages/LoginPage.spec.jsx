import { render, screen, fireEvent } from '@testing-library/react';
import { LoginPage } from '../../pages/LoginPage';
import { registerUser } from '../../services/auth';

describe('LoginPage', () => {
  beforeEach(() => {
    localStorage.clear();
    window.location.hash = '';
  });

  it('con credenciales correctas da la bienvenida y va al perfil', () => {
    registerUser({ name: 'Ana', email: 'ana@mail.com', password: '123' });
    spyOn(window, 'alert');
    render(<LoginPage navbar={{}} />);

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ana@mail.com' } });
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: '123' } });
    fireEvent.click(screen.getByRole('button', { name: 'Iniciar sesión' }));

    expect(window.alert).toHaveBeenCalledWith('¡Bienvenido Ana!');
    expect(window.location.hash).toBe('#perfil');
  });

  it('con credenciales incorrectas avisa y no navega', () => {
    spyOn(window, 'alert');
    render(<LoginPage navbar={{}} />);

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'x@mail.com' } });
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'mala' } });
    fireEvent.click(screen.getByRole('button', { name: 'Iniciar sesión' }));

    expect(window.alert).toHaveBeenCalledWith('Correo o contraseña incorrectos.');
    expect(window.location.hash).not.toBe('#perfil');
  });
});