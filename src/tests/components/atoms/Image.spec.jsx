import { render, screen } from '@testing-library/react';
import { Image } from '../../../components/atoms/Image';

describe('Image', () => {
  it('renderiza la imagen con src y alt', () => {
    render(<Image src="/img.png" alt="Logo" className="logo" />);
    const img = screen.getByAltText('Logo');
    expect(img.getAttribute('src')).toBe('/img.png');
    expect(img).toHaveClass('logo');
  });
});