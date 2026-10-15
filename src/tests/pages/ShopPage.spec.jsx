import { render, screen, fireEvent } from '@testing-library/react';
import { ShopPage } from '../../pages/ShopPage';

describe('ShopPage', () => {
  it('muestra el título y los 4 productos', () => {
    render(<ShopPage navbar={{}} />);
    expect(screen.getByRole('heading', { level: 1, name: 'Tienda de Divisas' })).toBeTruthy();
    expect(screen.getAllByRole('button', { name: 'Comprar' }).length).toBe(4);
    expect(screen.getByText('Mirror of Kalandra')).toBeTruthy();
  });

  it('Comprar entrega el producto a onAddToCart', () => {
    const onAddToCart = jasmine.createSpy('onAddToCart');
    render(<ShopPage navbar={{}} onAddToCart={onAddToCart} />);

    fireEvent.click(screen.getAllByRole('button', { name: 'Comprar' })[0]);

    expect(onAddToCart).toHaveBeenCalledWith(
      jasmine.objectContaining({ name: 'Divine Orb', price: '$2.00 USD' })
    );
  });
});