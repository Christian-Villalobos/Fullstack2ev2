import { render, screen } from '@testing-library/react';
import { ProfileTemplate } from '../../../components/templates/ProfileTemplate';

describe('ProfileTemplate', () => {
  const admin = { name: 'Admin', email: 'admin@poe.com', role: 'admin' };
  const normal = { name: 'Ana', email: 'ana@mail.com', role: 'user' };
  const users = [admin, normal];

  it('el administrador ve la lista de usuarios', () => {
    render(<ProfileTemplate navbar={{}} user={admin} users={users} onDeleteUser={() => {}} />);
    expect(screen.getByText(/Usuarios registrados \(2\)/)).toBeTruthy();
  });

  it('un usuario normal no ve la lista de usuarios', () => {
    render(<ProfileTemplate navbar={{}} user={normal} users={users} onDeleteUser={() => {}} />);
    expect(screen.queryByText(/Usuarios registrados/)).toBeNull();
    expect(screen.getByText('Usuario')).toBeTruthy();
  });

  it('muestra los títulos cuando se pasan', () => {
    const titles = [{ variant: 'h1', content: 'Mi Perfil', className: 'titulo-principal' }];
    render(<ProfileTemplate navbar={{}} titles={titles} user={normal} users={[]} />);
    expect(screen.getByRole('heading', { level: 1, name: 'Mi Perfil' })).toBeTruthy();
  });
});