import { render, screen } from '@testing-library/react';
import { AboutTemplate } from '../../../components/templates/AboutTemplate';

describe('AboutTemplate', () => {
  const team = [
    { src: '/a.png', alt: 'A', title: 'Persona A', description: 'Rol A' },
    { src: '/b.png', alt: 'B', title: 'Persona B', description: 'Rol B' },
  ];

  it('muestra la sección del equipo con su título', () => {
    render(<AboutTemplate navbar={{}} teamTitle="Nuestro equipo" team={team} />);
    expect(screen.getByRole('heading', { level: 2, name: 'Nuestro equipo' })).toBeTruthy();
    expect(screen.getByText('Persona B')).toBeTruthy();
  });

  it('muestra el equipo sin título si no se pasa teamTitle', () => {
    render(<AboutTemplate navbar={{}} team={team} />);
    expect(screen.getByText('Persona A')).toBeTruthy();
    expect(screen.queryAllByRole('heading', { level: 2 }).length).toBe(0);
  });

  it('no muestra la sección del equipo si no hay team', () => {
    render(<AboutTemplate navbar={{}} teamTitle="Nuestro equipo" />);
    expect(screen.queryByText('Nuestro equipo')).toBeNull();
  });

  it('muestra los bloques de introducción', () => {
    const intros = [{ src: '/i.png', alt: 'Intro', content: 'Texto de intro' }];
    render(<AboutTemplate navbar={{}} intros={intros} />);
    expect(screen.getByText('Texto de intro')).toBeTruthy();
  });
});