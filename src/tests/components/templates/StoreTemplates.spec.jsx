import { render, screen, fireEvent } from '@testing-library/react';
import { HomeTemplate } from '../../../components/templates/HomeTemplate';
import { ShopTemplate } from '../../../components/templates/ShopTemplate';
import { CartTemplate } from '../../../components/templates/CartTemplate';

describe('HomeTemplate', () => {
  it('muestra títulos, logo e introducciones', () => {
    render(
      <HomeTemplate
        navbar={{}}
        titles={[{ variant: 'h1', content: 'Inicio', className: 'titulo-principal' }]}
        logo={{ src: '/logo.png', alt: 'Logo grande', className: 'logo' }}
        intros={[{ src: '/i.png', alt: 'Intro', content: 'Texto de bienvenida' }]}
      />
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Inicio' })).toBeTruthy();
    expect(screen.getByAltText('Logo grande')).toBeTruthy();
    expect(screen.getByText('Texto de bienvenida')).toBeTruthy();
  });
});

describe('ShopTemplate', () => {
  const products = [
    { name: 'Divine Orb', price: '$2.00 USD', src: '/a.png', alt: 'Divine Orb' },
    { name: 'Chaos Orb', price: '$0.15 USD', src: '/b.png', alt: 'Chaos Orb' },
  ];

  it('muestra los productos y pasa onAddToCart hasta el botón', () => {
    const onAddToCart = jasmine.createSpy('onAddToCart');
    render(
      <ShopTemplate
        navbar={{}}
        titles={[{ variant: 'h1', content: 'Tienda', className: 'titulo-principal' }]}
        products={products}
        onAddToCart={onAddToCart}
      />
    );

    expect(screen.getAllByRole('button', { name: 'Comprar' }).length).toBe(2);
    fireEvent.click(screen.getAllByRole('button', { name: 'Comprar' })[0]);
    expect(onAddToCart).toHaveBeenCalledWith(products[0]);
  });
});

describe('CartTemplate', () => {
  const cart = [
    { name: 'Divine Orb', price: '$2.00 USD', qty: 1, src: '/a.png', alt: 'Divine Orb' },
  ];

  it('muestra el título y la lista del carrito', () => {
    render(
      <CartTemplate
        navbar={{}}
        titles={[{ variant: 'h1', content: 'Carrito', className: 'titulo-principal' }]}
        cart={cart}
      />
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Carrito' })).toBeTruthy();
    expect(screen.getByText('Divine Orb')).toBeTruthy();
  });

  it('pasa onAdd, onRemove y onClear a la lista', () => {
    const onAdd = jasmine.createSpy('onAdd');
    const onRemove = jasmine.createSpy('onRemove');
    const onClear = jasmine.createSpy('onClear');
    render(<CartTemplate navbar={{}} cart={cart} onAdd={onAdd} onRemove={onRemove} onClear={onClear} />);

    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('−'));
    fireEvent.click(screen.getByRole('button', { name: 'Vaciar carrito' }));

    expect(onAdd).toHaveBeenCalledWith(cart[0]);
    expect(onRemove).toHaveBeenCalledWith('Divine Orb');
    expect(onClear).toHaveBeenCalledTimes(1);
  });
});