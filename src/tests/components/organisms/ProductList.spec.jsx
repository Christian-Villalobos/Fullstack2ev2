import { render, screen, fireEvent } from '@testing-library/react';
import { ProductList } from '../../../components/organisms/ProductList';

describe('ProductList', () => {
  const products = [
    { name: 'Divine Orb', price: '$2.00 USD', src: '/a.png', alt: 'Divine Orb' },
    { name: 'Chaos Orb', price: '$0.15 USD', src: '/b.png', alt: 'Chaos Orb' },
  ];

  it('renderiza una tarjeta por producto', () => {
    render(<ProductList products={products} />);
    expect(screen.getAllByRole('button', { name: 'Comprar' }).length).toBe(2);
  });

  it('Comprar llama a onAddToCart con el producto correcto', () => {
    const onAddToCart = jasmine.createSpy('onAddToCart');
    render(<ProductList products={products} onAddToCart={onAddToCart} />);

    fireEvent.click(screen.getAllByRole('button', { name: 'Comprar' })[1]);
    expect(onAddToCart).toHaveBeenCalledWith(products[1]);
  });
});