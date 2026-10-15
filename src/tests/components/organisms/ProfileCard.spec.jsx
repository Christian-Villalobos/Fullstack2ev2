import { render, screen } from '@testing-library/react';
import { ProfileCard } from '../../../components/organisms/ProfileCard';

describe('ProfileCard', () => {
  it('muestra los datos de un administrador', () => {
    render(<ProfileCard user={{ name: 'Admin', email: 'admin@poe.com', role: 'admin' }} />);
    expect(screen.getByText('Admin')).toBeTruthy();
    expect(screen.getByText('Correo: admin@poe.com')).toBeTruthy();
    expect(screen.getByText('Administrador')).toHaveClass('role-admin');
  });

  it('muestra la etiqueta "Usuario" para un usuario normal', () => {
    render(<ProfileCard user={{ name: 'Ana', email: 'ana@mail.com', role: 'user' }} />);
    expect(screen.getByText('Usuario')).toHaveClass('role-user');
  });
});