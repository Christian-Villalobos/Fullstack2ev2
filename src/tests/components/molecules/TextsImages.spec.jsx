import { render, screen } from '@testing-library/react';
import { TextsImages } from '../../../components/molecules/TextsImages';

describe('TextsImages', () => {
  it('renderiza un bloque texto + imagen por elemento', () => {
    const items = [
      { src: '/a.png', alt: 'A', content: 'Texto A' },
      { src: '/b.png', alt: 'B', content: 'Texto B', className: 'reverse' },
    ];
    render(<TextsImages textsImages={items} />);

    expect(screen.getByText('Texto A')).toBeTruthy();
    expect(screen.getByText('Texto B')).toBeTruthy();
    expect(screen.getAllByRole('img').length).toBe(2);
  });

  it('no renderiza bloques con la lista vacía', () => {
    render(<TextsImages textsImages={[]} />);
    expect(screen.queryAllByRole('img').length).toBe(0);
  });
});