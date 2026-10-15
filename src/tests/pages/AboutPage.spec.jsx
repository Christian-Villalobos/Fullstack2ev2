import { render, screen } from '@testing-library/react';
import { AboutPage } from '../../pages/AboutPage';

describe('AboutPage', () => {
  it('muestra el título de la página', () => {
    render(<AboutPage navbar={{}} />);
    expect(screen.getByRole('heading', { level: 1, name: 'Quiénes Somos' })).toBeTruthy();
  });

  it('muestra la sección del equipo con sus tres integrantes', () => {
    render(<AboutPage navbar={{}} />);
    expect(screen.getByText('Nuestro Equipo de Exiliados')).toBeTruthy();
    expect(screen.getByText('AI Abuser')).toBeTruthy();
    expect(screen.getByText('Elvio Lado')).toBeTruthy();
    expect(screen.getByText('Peruvian Machine')).toBeTruthy();
  });

  it('muestra 2 imágenes de introducción + 3 del equipo', () => {
    render(<AboutPage navbar={{}} />);
    expect(screen.getAllByRole('img').length).toBe(5);
  });
});