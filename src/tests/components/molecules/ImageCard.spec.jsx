import { render, screen } from '@testing-library/react';
import { ImageCard } from '../../../components/molecules/ImageCard';

describe('ImageCard', () => {
  it('muestra imagen, título y descripción', () => {
    render(<ImageCard src="/a.png" alt="Equipo" title="Elvio" description="Analista" />);

    expect(screen.getByAltText('Equipo').getAttribute('src')).toBe('/a.png');
    expect(screen.getByRole('heading', { level: 3, name: 'Elvio' })).toBeTruthy();
    expect(screen.getByText('Analista')).toBeTruthy();
  });
});