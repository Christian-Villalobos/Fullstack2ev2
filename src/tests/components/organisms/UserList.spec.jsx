import { render, screen, fireEvent } from '@testing-library/react';
import { UserList } from '../../../components/organisms/UserList';

describe('UserList', () => {
  const users = [
    { name: 'Administrador', email: 'admin@poe.com', role: 'admin' },
    { name: 'Ana', email: 'ana@mail.com', role: 'user' },
  ];

  it('muestra el total y una fila por usuario', () => {
    render(<UserList users={users} onDelete={() => {}} />);
    expect(screen.getByText('Usuarios registrados (2)')).toBeTruthy();
    expect(screen.getByText('ana@mail.com')).toBeTruthy();
  });

  it('solo los usuarios normales tienen botón Eliminar', () => {
    render(<UserList users={users} onDelete={() => {}} />);
    expect(screen.getAllByRole('button', { name: 'Eliminar' }).length).toBe(1);
  });

  it('Eliminar llama a onDelete con el correo del usuario', () => {
    const onDelete = jasmine.createSpy('onDelete');
    render(<UserList users={users} onDelete={onDelete} />);
    fireEvent.click(screen.getByRole('button', { name: 'Eliminar' }));
    expect(onDelete).toHaveBeenCalledWith('ana@mail.com');
  });
});