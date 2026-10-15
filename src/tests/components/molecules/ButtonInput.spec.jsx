import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonInput } from '../../../components/molecules/ButtonInput';

describe('ButtonInput', () => {
  it('muestra el placeholder y el texto del botón', () => {
    render(
      <ButtonInput buttonText="Buscar" inputPlaceholder="Escribe aquí"
        onButtonClick={() => {}} onInputChange={() => {}} />
    );
    expect(screen.getByPlaceholderText('Escribe aquí')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Buscar' })).toBeTruthy();
  });

  it('ejecuta onInputChange y onButtonClick', () => {
    const onInputChange = jasmine.createSpy('onInputChange');
    const onButtonClick = jasmine.createSpy('onButtonClick');
    render(
      <ButtonInput buttonText="Buscar" inputPlaceholder="Escribe aquí"
        onButtonClick={onButtonClick} onInputChange={onInputChange} />
    );

    fireEvent.change(screen.getByPlaceholderText('Escribe aquí'), { target: { value: 'orb' } });
    fireEvent.click(screen.getByRole('button', { name: 'Buscar' }));

    expect(onInputChange).toHaveBeenCalledTimes(1);
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });
});