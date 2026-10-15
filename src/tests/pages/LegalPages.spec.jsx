import { render, screen } from '@testing-library/react';
import { PrivacyPage } from '../../pages/PrivacyPage';
import { TermsPage } from '../../pages/TermsPage';

describe('Páginas legales', () => {
  it('PrivacyPage muestra su título y sus secciones', () => {
    render(<PrivacyPage navbar={{}} />);
    expect(screen.getByText('Política de Privacidad')).toBeTruthy();
    expect(screen.getByText('1. Información que recopilamos')).toBeTruthy();
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBe(6);
  });

  it('TermsPage muestra su título y sus secciones', () => {
    render(<TermsPage navbar={{}} />);
    expect(screen.getByText('Términos y Condiciones')).toBeTruthy();
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBe(7);
  });
});