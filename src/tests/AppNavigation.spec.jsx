import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { loginUser, registerUser } from '../services/auth';

describe('App - navegación por hash', () => {
  beforeEach(() => {
    localStorage.clear();
    window.location.hash = '';
  });

  const rutas = [
    ['#inicio', 'Path of Exile - Currency Exchange'],
    ['#quienes-somos', 'Quiénes Somos'],
    ['#tienda', 'Tienda de Divisas'],
    ['#carrito', 'Mi Carrito'],
    ['#contacto', 'Contacto y Soporte'],
    ['#privacidad', 'Política de Privacidad'],
    ['#terminos', 'Términos y Condiciones'],
    ['#registro', 'Registro'],
    ['#login', 'Iniciar sesión'],
  ];

  rutas.forEach(([hash, titulo]) => {
    it(`${hash} muestra la página "${titulo}"`, () => {
      window.location.hash = hash;
      render(<App />);
      expect(screen.getByRole('heading', { level: 1, name: titulo })).toBeTruthy();
    });
  });

  it('#perfil con sesión muestra el perfil', () => {
    loginUser({ email: 'admin@poe.com', password: 'admin123' });
    window.location.hash = '#perfil';
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Panel de Administrador' })).toBeTruthy();
  });

  it('el hash se interpreta sin importar mayúsculas', () => {
    window.location.hash = '#TIENDA';
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Tienda de Divisas' })).toBeTruthy();
  });

  it('un hash desconocido muestra el inicio', () => {
    window.location.hash = '#no-existe';
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Path of Exile - Currency Exchange' })
    ).toBeTruthy();
  });

  it('cambia de página cuando cambia el hash', async () => {
    window.location.hash = '#inicio';
    render(<App />);

    window.location.hash = '#tienda';

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Tienda de Divisas' })
    ).toBeTruthy();
  });
});

describe('App - flujo del carrito', () => {
  beforeEach(() => {
    localStorage.clear();
    window.location.hash = '#tienda';
    registerUser({ name: 'Ana', email: 'ana@mail.com', password: '123' });
    loginUser({ email: 'ana@mail.com', password: '123' });
  });

  async function comprarYVerCarrito() {
    render(<App />);
    fireEvent.click(screen.getAllByRole('button', { name: 'Comprar' })[0]);
    window.location.hash = '#carrito';
    await screen.findByRole('heading', { level: 1, name: 'Mi Carrito' });
  }

  it('lo comprado aparece en la página del carrito', async () => {
    await comprarYVerCarrito();
    expect(screen.getByText('Divine Orb')).toBeTruthy();
  });

  it('+ aumenta la cantidad en el contador del navbar', async () => {
    await comprarYVerCarrito();
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('🛒 Carrito (2)')).toBeTruthy();
  });

  it('− con una sola unidad deja el carrito vacío', async () => {
    await comprarYVerCarrito();
    fireEvent.click(screen.getByText('−'));
    expect(screen.getByText(/Tu carrito está vacío/)).toBeTruthy();
  });

  it('Vaciar carrito elimina todo', async () => {
    await comprarYVerCarrito();
    fireEvent.click(screen.getByRole('button', { name: 'Vaciar carrito' }));
    expect(screen.getByText(/Tu carrito está vacío/)).toBeTruthy();
  });

  it('Finalizar compra avisa y vacía el carrito', async () => {
    spyOn(window, 'alert');
    await comprarYVerCarrito();

    fireEvent.click(screen.getByRole('button', { name: 'Finalizar compra' }));

    expect(window.alert).toHaveBeenCalled();
    expect(screen.getByText(/Tu carrito está vacío/)).toBeTruthy();
  });
});