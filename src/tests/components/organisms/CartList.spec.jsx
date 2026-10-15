import { render, screen, fireEvent } from '@testing-library/react';
import { CartList } from '../../../components/organisms/CartList';

describe('CartList', () => {
  const cartConUnItem = [
    { name: 'Divine Orb', price: '$2.00 USD', qty: 1, src: '/img.png', alt: 'Divine Orb' },
  ];

  it('muestra mensaje de carrito vacío', () => {
    render(<CartList cart={[]} />);
    expect(screen.getByText(/Tu carrito está vacío/)).toBeTruthy();
  });

  it('calcula el total sumando precio * cantidad', () => {
    const cart = [
      { name: 'Divine Orb', price: '$2.00 USD', qty: 2, src: '/img.png', alt: 'Divine Orb' },
      { name: 'Chaos Orb', price: '$0.15 USD', qty: 2, src: '/img.png', alt: 'Chaos Orb' },
    ];
    render(<CartList cart={cart} />);
    expect(screen.getByText('$4.30 USD')).toBeTruthy();
  });

  it('"Vaciar carrito" ejecuta onClear', () => {
    const onClear = jasmine.createSpy('onClear');
    render(<CartList cart={cartConUnItem} onClear={onClear} />);

    fireEvent.click(screen.getByRole('button', { name: 'Vaciar carrito' }));
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('"Finalizar compra" avisa y vacía el carrito', () => {
    spyOn(window, 'alert');
    const onClear = jasmine.createSpy('onClear');
    render(<CartList cart={cartConUnItem} onClear={onClear} />);

    fireEvent.click(screen.getByRole('button', { name: 'Finalizar compra' }));
    expect(window.alert).toHaveBeenCalled();
    expect(onClear).toHaveBeenCalledTimes(1);
  });
});