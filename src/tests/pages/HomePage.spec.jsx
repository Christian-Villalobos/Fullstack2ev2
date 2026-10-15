import { render, screen } from '@testing-library/react';
import { HomePage } from '../../pages/HomePage';

describe('HomePage', () => {
  it('muestra el título principal', () => {
    render(<HomePage navbar={{}} />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Path of Exile - Currency Exchange' })
    ).toBeTruthy();
  });

  it('muestra el logo y los dos bloques de introducción', () => {
    render(<HomePage navbar={{}} />);
    expect(screen.getByAltText('Logo Path of Exile')).toBeTruthy();
    expect(screen.getByAltText('Mercado de divisas Path of Exile')).toBeTruthy();
    expect(screen.getByAltText('Compra segura')).toBeTruthy();
    expect(screen.getAllByRole('img').length).toBe(3);
  });

  it('muestra el footer cuando se pasa', () => {
    render(<HomePage navbar={{}} footer={{ text: 'Pie de página' }} />);
    expect(screen.getByText('Pie de página')).toBeTruthy();
  });
});