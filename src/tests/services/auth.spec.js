import {
  getUsers,
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  deleteUser,
} from '../../services/auth';

describe('auth service', () => {
  beforeEach(() => localStorage.clear());

  it('crea el administrador por defecto', () => {
    const users = getUsers();
    expect(users.length).toBe(1);
    expect(users[0].role).toBe('admin');
  });

  it('los usuarios quedan guardados entre llamadas', () => {
    registerUser({ name: 'Ana', email: 'ana@mail.com', password: '123' });
    expect(getUsers().length).toBe(2);
    expect(getUsers().length).toBe(2);
  });

  it('registra un usuario nuevo con rol "user"', () => {
    const result = registerUser({ name: 'Ana', email: 'ANA@mail.com', password: '123' });
    expect(result.ok).toBeTrue();
    expect(getUsers().find(u => u.email === 'ana@mail.com').role).toBe('user');
  });

  it('rechaza campos vacíos', () => {
    expect(registerUser({ name: '', email: '', password: '' }).ok).toBeFalse();
  });

  it('rechaza un nombre formado solo por espacios', () => {
    expect(registerUser({ name: '   ', email: 'a@b.com', password: '123' }).ok).toBeFalse();
  });

  it('rechaza correos duplicados', () => {
    registerUser({ name: 'Ana', email: 'ana@mail.com', password: '123' });
    const result = registerUser({ name: 'Otra', email: 'ana@mail.com', password: '456' });
    expect(result.ok).toBeFalse();
  });

  it('login correcto guarda la sesión y logout la borra', () => {
    const user = loginUser({ email: 'admin@poe.com', password: 'admin123' });
    expect(user.name).toBe('Administrador');
    expect(getCurrentUser().email).toBe('admin@poe.com');

    logoutUser();
    expect(getCurrentUser()).toBeNull();
  });

  it('login ignora mayúsculas y espacios en el correo', () => {
    const user = loginUser({ email: '  ADMIN@poe.com ', password: 'admin123' });
    expect(user).not.toBeNull();
  });

  it('login con credenciales malas devuelve null y no guarda sesión', () => {
    expect(loginUser({ email: 'admin@poe.com', password: 'mala' })).toBeNull();
    expect(getCurrentUser()).toBeNull();
  });

  it('getCurrentUser devuelve null si nadie inició sesión', () => {
    expect(getCurrentUser()).toBeNull();
  });

  it('elimina usuarios normales pero no al admin', () => {
    registerUser({ name: 'Ana', email: 'ana@mail.com', password: '123' });
    expect(deleteUser('ana@mail.com').ok).toBeTrue();
    expect(deleteUser('admin@poe.com').ok).toBeFalse();
  });

  it('no puede eliminar un usuario que no existe', () => {
    expect(deleteUser('fantasma@mail.com').ok).toBeFalse();
  });
});