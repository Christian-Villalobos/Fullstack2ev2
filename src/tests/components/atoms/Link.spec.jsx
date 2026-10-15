import { render, screen } from '@testing-library/react';
import { Link } from '../../../components/atoms/Link';

describe('Link', () => {
  it('renderiza un enlace con su href y texto', () => {
    render(<Link href="#tienda">Tienda</Link>);
    const link = screen.getByText('Tienda');
    expect(link.tagName).toBe('A');
    expect(link.getAttribute('href')).toBe('#tienda');
  });

  it('usa "#" como href por defecto', () => {
    render(<Link>Inicio</Link>);
    expect(screen.getByText('Inicio').getAttribute('href')).toBe('#');
  });
});