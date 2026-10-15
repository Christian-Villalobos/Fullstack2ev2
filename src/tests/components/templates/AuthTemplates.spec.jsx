import { render, screen, fireEvent } from '@testing-library/react';
import { LoginTemplate } from '../../../components/templates/LoginTemplate';
import { RegisterTemplate } from '../../../components/templates/RegisterTemplate';

describe('LoginTemplate', () => {
  it('muestra título, campos y botón; entrega los datos al enviar', () => {
    const onSubmit = jasmine.createSpy('onSubmit');
    render(
      <LoginTemplate
        navbar={{}}
        texts={[{ variant: 'h1', content: 'Entrar', className: 'titulo-principal' }]}
        form={{
          fields: [{ label: 'Email', type: 'email', name: 'email' }],
          buttonText: 'Acceder',
          onSubmit,
        }}
      />
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Entrar' })).toBeTruthy();
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'a@b.com' } });
    fireEvent.click(screen.getByRole('button', { name: 'Acceder' }));

    expect(onSubmit).toHaveBeenCalledWith({ email: 'a@b.com' });
  });

  it('muestra el footer si se pasa', () => {
    render(
      <LoginTemplate navbar={{}} texts={[]} form={{ fields: [] }} footer={{ text: 'Pie login' }} />
    );
    expect(screen.getByText('Pie login')).toBeTruthy();
  });
});

describe('RegisterTemplate', () => {
  it('muestra título, campos y botón; entrega los datos al enviar', () => {
    const onSubmit = jasmine.createSpy('onSubmit');
    render(
      <RegisterTemplate
        navbar={{}}
        texts={[{ variant: 'h1', content: 'Crear cuenta', className: 'titulo-principal' }]}
        form={{
          fields: [{ label: 'Nombre', type: 'text', name: 'name' }],
          buttonText: 'Crear',
          onSubmit,
        }}
      />
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Crear cuenta' })).toBeTruthy();
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Ana' } });
    fireEvent.click(screen.getByRole('button', { name: 'Crear' }));

    expect(onSubmit).toHaveBeenCalledWith({ name: 'Ana' });
  });

  it('muestra el footer si se pasa', () => {
    render(
      <RegisterTemplate navbar={{}} texts={[]} form={{ fields: [] }} footer={{ text: 'Pie registro' }} />
    );
    expect(screen.getByText('Pie registro')).toBeTruthy();
  });
});