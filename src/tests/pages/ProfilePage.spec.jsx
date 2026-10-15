import { render, screen, fireEvent } from '@testing-library/react';
import { ProfilePage } from '../../pages/ProfilePage';
import { loginUser, registerUser, getUsers } from '../../services/auth';

describe('ProfilePage', () => {
  beforeEach(() => {
    localStorage.clear();
    window.location.hash = '';
  });

  it('un usuario normal ve su perfil pero no la lista de usuarios', () => {
    registerUser({ name: 'Ana', email: 'ana@mail.com', password: '123' });
    loginUser({ email: 'ana@mail.com', password: '123' });

    render(<ProfilePage navbar={{}} />);

    expect(screen.getByText('Mi Perfil')).toBeTruthy();
    expect(screen.queryByText(/Usuarios registrados/)).toBeNull();
  });

  it('el administrador ve el panel y puede eliminar usuarios', () => {
    registerUser({ name: 'Ana', email: 'ana@mail.com', password: '123' });
    loginUser({ email: 'admin@poe.com', password: 'admin123' });
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(window, 'alert');

    render(<ProfilePage navbar={{}} />);

    expect(screen.getByText('Panel de Administrador')).toBeTruthy();
    expect(screen.getByText('Usuarios registrados (2)')).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Eliminar' }));

    expect(getUsers().length).toBe(1);
    expect(screen.getByText('Usuarios registrados (1)')).toBeTruthy();
  });

  it('no elimina nada si el administrador cancela la confirmación', () => {
    registerUser({ name: 'Ana', email: 'ana@mail.com', password: '123' });
    loginUser({ email: 'admin@poe.com', password: 'admin123' });
    spyOn(window, 'confirm').and.returnValue(false);

    render(<ProfilePage navbar={{}} />);
    fireEvent.click(screen.getByRole('button', { name: 'Eliminar' }));

    expect(getUsers().length).toBe(2);
  });

  it('sin sesión redirige al login y no muestra nada', () => {
    const { container } = render(<ProfilePage navbar={{}} />);
    expect(container.innerHTML).toBe('');
    expect(window.location.hash).toBe('#login');
  });
});