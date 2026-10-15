import { render, screen, fireEvent } from '@testing-library/react';
import { CartItem } from '../../../components/molecules/CartItem';

describe('CartItem', () => {
  it('muestra nombre, precio y cantidad', () => {
    render(
      <CartItem src="/img.png" alt="Chaos Orb" name="Chaos Orb" price="$0.15 USD" qty={3}
        onAdd={() => {}} onRemove={() => {}} />
    );
    expect(screen.getByText('Chaos Orb')).toBeTruthy();
    expect(screen.getByText('$0.15 USD')).toBeTruthy();
    expect(screen.getByText('3')).toBeTruthy();
  });

  it('los botones + y − ejecutan onAdd y onRemove', () => {
    const onAdd = jasmine.createSpy('onAdd');
    const onRemove = jasmine.createSpy('onRemove');
    render(
      <CartItem src="/img.png" alt="x" name="x" price="$1.00 USD" qty={1}
        onAdd={onAdd} onRemove={onRemove} />
    );

    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('−'));

    expect(onAdd).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});