import { render, screen, fireEvent } from '@testing-library/react';
import { RegisterPage } from '../../pages/RegisterPage';
import { getUsers } from '../../services/auth';

describe('RegisterPage', () => {
  beforeEach(() => {
    localStorage.clear();
    window.location.hash = '';
  });

  function llenarFormulario(nombre, email, password) {
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: nombre } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: email } });
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: password } });
    fireEvent.click(screen.getByRole('button', { name: 'Registrarse' }));
  }

  it('registra al usuario y redirige al login', () => {
    spyOn(window, 'alert');
    render(<RegisterPage navbar={{}} />);

    llenarFormulario('Ana', 'ana@mail.com', '123');

    expect(getUsers().some(u => u.email === 'ana@mail.com')).toBeTrue();
    expect(window.location.hash).toBe('#login');
  });

  it('no redirige si el correo ya está registrado', () => {
    spyOn(window, 'alert');
    render(<RegisterPage navbar={{}} />);
    llenarFormulario('Ana', 'admin@poe.com', '123');

    expect(window.alert).toHaveBeenCalledWith('El correo ya está registrado.');
    expect(window.location.hash).not.toBe('#login');
  });
});