import { render, screen, fireEvent } from '@testing-library/react';
import { CartPage } from '../../pages/CartPage';

describe('CartPage', () => {
  const cart = [
    { name: 'Divine Orb', price: '$2.00 USD', qty: 2, src: '/img.png', alt: 'Divine Orb' },
  ];

  it('muestra el título y el carrito vacío', () => {
    render(<CartPage navbar={{}} cart={[]} />);
    expect(screen.getByRole('heading', { level: 1, name: 'Mi Carrito' })).toBeTruthy();
    expect(screen.getByText(/Tu carrito está vacío/)).toBeTruthy();
  });

  it('muestra los productos del carrito con su total', () => {
    render(<CartPage navbar={{}} cart={cart} />);
    expect(screen.getByText('Divine Orb')).toBeTruthy();
    expect(screen.getByText('$4.00 USD')).toBeTruthy();
  });

  it('+ y − llaman a onAdd (con el producto) y onRemove (con el nombre)', () => {
    const onAdd = jasmine.createSpy('onAdd');
    const onRemove = jasmine.createSpy('onRemove');
    render(<CartPage navbar={{}} cart={cart} onAdd={onAdd} onRemove={onRemove} />);

    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('−'));

    expect(onAdd).toHaveBeenCalledWith(cart[0]);
    expect(onRemove).toHaveBeenCalledWith('Divine Orb');
  });

  it('Vaciar carrito llama a onClear', () => {
    const onClear = jasmine.createSpy('onClear');
    render(<CartPage navbar={{}} cart={cart} onClear={onClear} />);
    fireEvent.click(screen.getByRole('button', { name: 'Vaciar carrito' }));
    expect(onClear).toHaveBeenCalledTimes(1);
  });
});