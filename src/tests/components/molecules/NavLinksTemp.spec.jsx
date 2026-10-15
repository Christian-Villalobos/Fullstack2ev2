import { render, screen } from '@testing-library/react';
import { NavLinks } from '../../../components/molecules/NavLinksTemp';

describe('NavLinks', () => {
  it('renderiza un enlace por cada elemento', () => {
    const links = [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Tienda', href: '#tienda' },
    ];
    render(<NavLinks links={links} />);

    expect(screen.getAllByRole('listitem').length).toBe(2);
    expect(screen.getByText('Tienda').getAttribute('href')).toBe('#tienda');
  });

  it('no renderiza elementos si la lista está vacía', () => {
    render(<NavLinks links={[]} />);
    expect(screen.queryAllByRole('listitem').length).toBe(0);
  });
});