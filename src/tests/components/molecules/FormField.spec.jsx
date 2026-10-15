import { render, screen, fireEvent } from '@testing-library/react';
import { FormField } from '../../../components/molecules/FormField';

describe('FormField', () => {
  it('asocia la etiqueta con el input mediante name/id', () => {
    render(<FormField label="Email" name="email" type="email" value="" onChange={() => {}} />);
    const input = screen.getByLabelText('Email');
    expect(input.id).toBe('email');
    expect(input.name).toBe('email');
    expect(input.type).toBe('email');
  });

  it('no muestra etiqueta si no se pasa label', () => {
    render(<FormField name="x" placeholder="sin etiqueta" value="" onChange={() => {}} />);
    expect(screen.queryByRole('label')).toBeNull();
    expect(screen.getByPlaceholderText('sin etiqueta')).toBeTruthy();
  });

  it('ejecuta onChange al escribir', () => {
    const onChange = jasmine.createSpy('onChange');
    render(<FormField label="Nombre" name="name" value="" onChange={onChange} />);
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Ana' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});