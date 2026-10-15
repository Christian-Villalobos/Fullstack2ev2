import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../../../components/molecules/ProductCard';

describe('ProductCard', () => {
  const props = { src: '/img.png', alt: 'Divine Orb', name: 'Divine Orb', price: '$2.00 USD' };

  it('muestra nombre, precio e imagen', () => {
    render(<ProductCard {...props} onBuy={() => {}} />);
    expect(screen.getByText('Divine Orb')).toBeTruthy();
    expect(screen.getByText('$2.00 USD')).toBeTruthy();
    expect(screen.getByAltText('Divine Orb')).toBeTruthy();
  });

  it('ejecuta onBuy al presionar Comprar', () => {
    const onBuy = jasmine.createSpy('onBuy');
    render(<ProductCard {...props} onBuy={onBuy} />);
    fireEvent.click(screen.getByRole('button', { name: 'Comprar' }));
    expect(onBuy).toHaveBeenCalledTimes(1);
  });
});