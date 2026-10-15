import { render, screen } from '@testing-library/react';
import { LegalTemplate } from '../../../components/templates/LegalTemplate';

describe('LegalTemplate', () => {
  it('muestra el título de página y cada sección con su título y texto', () => {
    const sections = [
      { title: '1. Primera', content: 'Contenido uno' },
      { title: '2. Segunda', content: 'Contenido dos' },
    ];
    render(<LegalTemplate navbar={{}} pageTitle="Mis Términos" sections={sections} />);

    expect(screen.getByRole('heading', { level: 1, name: 'Mis Términos' })).toBeTruthy();
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBe(2);
    expect(screen.getByText('Contenido dos')).toBeTruthy();
  });

  it('una sección sin título no muestra encabezado', () => {
    render(
      <LegalTemplate navbar={{}} pageTitle="T" sections={[{ content: 'Solo texto' }]} />
    );
    expect(screen.getByText('Solo texto')).toBeTruthy();
    expect(screen.queryAllByRole('heading', { level: 2 }).length).toBe(0);
  });

  it('muestra el footer solo si se pasa', () => {
    const { rerender } = render(<LegalTemplate navbar={{}} pageTitle="T" sections={[]} />);
    expect(screen.queryByText('Pie')).toBeNull();

    rerender(<LegalTemplate navbar={{}} pageTitle="T" sections={[]} footer={{ text: 'Pie' }} />);
    expect(screen.getByText('Pie')).toBeTruthy();
  });
});