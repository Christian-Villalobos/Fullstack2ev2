import { render, screen } from '@testing-library/react';
import { ContactTemplate } from '../../../components/templates/ContactTemplate';

describe('ContactTemplate', () => {
  const titles = [{ variant: 'h1', content: 'Contacto', className: 'titulo-principal' }];
  const cards = [{ src: '/a.png', alt: 'Tarjeta', title: 'Soporte', description: 'Desc' }];
  const form = { fields: [{ label: 'Nombre', name: 'name' }], buttonText: 'Enviar' };

  it('muestra títulos, tarjetas y formulario cuando se pasan', () => {
    const { container } = render(
      <ContactTemplate navbar={{}} titles={titles} contactCards={cards} form={form} />
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Contacto' })).toBeTruthy();
    expect(screen.getByAltText('Tarjeta')).toBeTruthy();
    expect(container.querySelector('form')).toBeTruthy();
  });

  it('omite tarjetas y formulario cuando no se pasan', () => {
    const { container } = render(<ContactTemplate navbar={{}} titles={titles} />);
    expect(screen.queryByRole('img')).toBeNull();
    expect(container.querySelector('form')).toBeNull();
  });
});