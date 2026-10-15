import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { loginUser, registerUser } from '../services/auth';
import { getCart } from '../services/cart';

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
    window.location.hash = '#tienda'; // se fija ANTES de render para que App arranque en la tienda
  });

  it('sin sesión, comprar avisa y redirige al login', () => {
    spyOn(window, 'alert');
    render(<App />);

    fireEvent.click(screen.getAllByRole('button', { name: 'Comprar' })[0]);

    expect(window.alert).toHaveBeenCalledWith('Debes iniciar sesión para comprar.');
    expect(window.location.hash).toBe('#login');
  });

  it('con sesión, comprar agrega al carrito y actualiza el contador', () => {
    registerUser({ name: 'Ana', email: 'ana@mail.com', password: '123' });
    loginUser({ email: 'ana@mail.com', password: '123' });
    render(<App />);

    expect(screen.getByText('🛒 Carrito')).toBeTruthy();

    fireEvent.click(screen.getAllByRole('button', { name: 'Comprar' })[0]);
    fireEvent.click(screen.getAllByRole('button', { name: 'Comprar' })[0]);

    expect(screen.getByText('🛒 Carrito (2)')).toBeTruthy();
    expect(getCart()[0].qty).toBe(2); // el carrito se guarda en localStorage
  });

  it('con sesión, el navbar muestra "Mi perfil" y "Cerrar sesión"', () => {
    loginUser({ email: 'admin@poe.com', password: 'admin123' });
    render(<App />);

    expect(screen.getByRole('button', { name: 'Mi perfil' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Cerrar sesión' })).toBeTruthy();
    expect(screen.queryByRole('button', { name: 'Iniciar sesión' })).toBeNull();
  });

  it('sin sesión, el navbar muestra "Iniciar sesión" y "Registrarse"', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Iniciar sesión' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Registrarse' })).toBeTruthy();
  });

  it('cerrar sesión limpia la sesión y manda al inicio', () => {
    loginUser({ email: 'admin@poe.com', password: 'admin123' });
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Cerrar sesión' }));

    expect(localStorage.getItem('poe_current_user')).toBeNull();
    expect(window.location.hash).toBe('#inicio');
  });

  it('cerrar sesión vacía el carrito guardado', () => {
    registerUser({ name: 'Ana', email: 'ana@mail.com', password: '123' });
    loginUser({ email: 'ana@mail.com', password: '123' });
    render(<App />);

    fireEvent.click(screen.getAllByRole('button', { name: 'Comprar' })[0]);
    expect(getCart().length).toBe(1);

    fireEvent.click(screen.getByRole('button', { name: 'Cerrar sesión' }));
    expect(getCart()).toEqual([]);
  });
});