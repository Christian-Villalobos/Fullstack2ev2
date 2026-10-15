import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../../../components/organisms/Navbar';

describe('Navbar', () => {
  it('muestra logo, enlaces y botones cuando se pasan', () => {
    const onClick = jasmine.createSpy('onClick');
    render(
      <Navbar
        logo={{ src: '/logo.png', alt: 'Logo del sitio' }}
        links={[{ label: 'Inicio', href: '#inicio' }]}
        buttons={[{ label: 'Iniciar sesión', onClick, className: 'btn-gold' }]}
      />
    );

    expect(screen.getByAltText('Logo del sitio')).toBeTruthy();
    expect(screen.getByText('Inicio')).toBeTruthy();

    fireEvent.click(screen.getByText('Iniciar sesión'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('no muestra nada opcional si no se pasa', () => {
    render(<Navbar />);
    expect(screen.queryByRole('img')).toBeNull();
    expect(screen.queryByRole('list')).toBeNull();
    expect(screen.queryByRole('button')).toBeNull();
  });
});