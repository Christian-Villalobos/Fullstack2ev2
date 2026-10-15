import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonGroup } from '../../../components/molecules/ButtonGroup';

describe('ButtonGroup', () => {
  it('renderiza un botón por elemento y ejecuta su onClick', () => {
    const onLogin = jasmine.createSpy('onLogin');
    const onRegister = jasmine.createSpy('onRegister');
    const buttons = [
      { label: 'Iniciar sesión', onClick: onLogin, className: 'btn-gold' },
      { label: 'Registrarse', onClick: onRegister, className: 'btn-white' },
    ];
    render(<ButtonGroup buttons={buttons} />);

    expect(screen.getAllByRole('button').length).toBe(2);

    fireEvent.click(screen.getByText('Registrarse'));
    expect(onRegister).toHaveBeenCalledTimes(1);
    expect(onLogin).not.toHaveBeenCalled();
  });
});