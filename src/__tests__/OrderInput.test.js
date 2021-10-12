/* eslint-disable no-undef */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import OrderInput from '../components/OrderInput';
import renderWithRouter from '../renderWithRouter';

const handleClick = jest.fn();

describe('Testa o componente de ordenação dos serviços', () => {
  beforeEach(() => {
    renderWithRouter(<OrderInput onChangeValue={handleClick} />);
  });
  test('Testa se o componente é renderizado', () => {
    const input = screen.getByLabelText('ORDENAR');

    expect(input).toBeInTheDocument();
  });

  test('Testa se o componente possui as opções corretas para ordenação', () => {
    const select1 = screen.getByDisplayValue('Lançamento');

    expect(select1).toHaveDisplayValue('Lançamento');

    userEvent.selectOptions(screen.getByRole('combobox'), 'Preço');

    expect(screen.getByRole('option', { name: 'Lançamento' }).selected).toBe(false);
    expect(screen.getByRole('option', { name: 'Preço' }).selected).toBe(true);

    const select2 = screen.getByDisplayValue('Preço');

    expect(select2).toHaveDisplayValue('Preço');
  });
});
