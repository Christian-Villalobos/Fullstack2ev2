import { render, screen } from '@testing-library/react';
import { Text } from '../../../components/atoms/Text';

describe('Text', () => {
  it('renderiza un <p> por defecto', () => {
    render(<Text>Hola</Text>);
    expect(screen.getByText('Hola').tagName).toBe('P');
  });

  it('usa la etiqueta indicada en variant y aplica className', () => {
    render(<Text variant="h1" className="titulo-principal">Título</Text>);
    const el = screen.getByText('Título');
    expect(el.tagName).toBe('H1');
    expect(el).toHaveClass('titulo-principal');
  });

  it('pasa props adicionales (ej. id)', () => {
    render(<Text id="mi-texto">Hola</Text>);
    expect(screen.getByText('Hola').id).toBe('mi-texto');
  });
});