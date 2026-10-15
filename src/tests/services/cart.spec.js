import { getCart, saveCart } from '../../services/cart';

describe('cart service', () => {
  beforeEach(() => localStorage.clear());

  it('devuelve una lista vacía si no hay nada guardado', () => {
    expect(getCart()).toEqual([]);
  });

  it('guarda y recupera el carrito', () => {
    const cart = [{ name: 'Divine Orb', price: '$2.00 USD', qty: 2 }];
    saveCart(cart);
    expect(getCart()).toEqual(cart);
  });
});