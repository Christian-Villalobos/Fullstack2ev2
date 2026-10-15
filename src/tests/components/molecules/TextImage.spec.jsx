import { render, screen } from '@testing-library/react';
import { TextImage } from '../../../components/molecules/TextImage';

describe('TextImage', () => {
  it('muestra el texto y la imagen', () => {
    render(<TextImage src="/img.png" alt="Misión">Nuestro texto</TextImage>);
    expect(screen.getByText('Nuestro texto')).toBeTruthy();
    expect(screen.getByAltText('Misión').getAttribute('src')).toBe('/img.png');
  });

  it('aplica la clase extra (ej. reverse)', () => {
    const { container } = render(
      <TextImage src="/a.png" alt="a" className="reverse">x</TextImage>
    );
    expect(container.firstChild).toHaveClass('text-image');
    expect(container.firstChild).toHaveClass('reverse');
  });
});