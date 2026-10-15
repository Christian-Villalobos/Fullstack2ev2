import { render, screen } from '@testing-library/react';
import { Texts } from '../../../components/molecules/Texts';

describe('Texts', () => {
  it('renderiza cada texto con su variante y clase', () => {
    const texts = [
      { variant: 'h1', content: 'Título', className: 'titulo-principal' },
      { variant: 'p', content: 'Subtítulo', className: 'subtitulo' },
    ];
    render(<Texts texts={texts} />);

    expect(screen.getByText('Título').tagName).toBe('H1');
    expect(screen.getByText('Subtítulo')).toHaveClass('subtitulo');
  });
});