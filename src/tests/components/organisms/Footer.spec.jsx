import { render, screen } from '@testing-library/react';
import { Footer } from '../../../components/organisms/Footer';

describe('Footer', () => {
  it('muestra el texto y los enlaces', () => {
    render(
      <Footer
        text="© 2026 Derechos reservados"
        links={[{ label: 'Privacidad', href: '#privacidad' }]}
      />
    );
    expect(screen.getByText('© 2026 Derechos reservados')).toBeTruthy();
    expect(screen.getByText('Privacidad').getAttribute('href')).toBe('#privacidad');
  });

  it('omite texto y enlaces si no se pasan', () => {
    render(<Footer />);
    expect(screen.queryByRole('list')).toBeNull();
    expect(screen.queryByText(/©/)).toBeNull();
  });
});