import { render, screen } from '@testing-library/react';
import { ImageCards } from '../../../components/molecules/ImageCards';

describe('ImageCards', () => {
  it('renderiza una tarjeta por cada elemento', () => {
    const items = [
      { src: '/a.png', alt: 'A', title: 'Título A', description: 'Desc A' },
      { src: '/b.png', alt: 'B', title: 'Título B', description: 'Desc B' },
    ];
    render(<ImageCards items={items} />);

    expect(screen.getByText('Título A')).toBeTruthy();
    expect(screen.getByText('Desc B')).toBeTruthy();
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});