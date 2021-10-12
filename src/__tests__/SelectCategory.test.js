/* eslint-disable no-undef */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import SelectCategory from '../components/SelectCategory';
import renderWithRouter from '../renderWithRouter';

const handleClick = jest.fn();

const categoryContent = [
  {
    name: 'Todos',
    focusClass: 'main-page__content__category 1 focused',
    notFocusClass: 'main-page__content__category 1',
  },
  {
    name: 'Profissional',
    focusClass: 'main-page__content__category 2 focused',
    notFocusClass: 'main-page__content__category 2',
  },
  {
    name: 'Reguladores',
    focusClass: 'main-page__content__category 3 focused',
    notFocusClass: 'main-page__content__category 3',
  },
  {
    name: 'Sócio Ambiental',
    focusClass: 'main-page__content__category 4 focused',
    notFocusClass: 'main-page__content__category 4',
  },
  {
    name: 'Jurídico',
    focusClass: 'main-page__content__category 5 focused',
    notFocusClass: 'main-page__content__category 5',
  },
  {
    name: 'Listas Restritivas',
    focusClass: 'main-page__content__category 6 focused',
    notFocusClass: 'main-page__content__category 6',
  },
  {
    name: 'Mídia / Internet',
    focusClass: 'main-page__content__category 7 focused',
    notFocusClass: 'main-page__content__category 7',
  },
  {
    name: 'Bens e Imóveis',
    focusClass: 'main-page__content__category 8 focused',
    notFocusClass: 'main-page__content__category 8',
  },
  {
    name: 'Cadastro',
    focusClass: 'main-page__content__category 9 focused',
    notFocusClass: 'main-page__content__category 9',
  },
  {
    name: 'Financeiro',
    focusClass: 'main-page__content__category 10 focused',
    notFocusClass: 'main-page__content__category 10',
  },
];

describe('Testa o componente de cards com os filtros de categorias', () => {
  beforeEach(() => {
    renderWithRouter(
      <SelectCategory categories={categoryContent} onSelectCard={handleClick} />,
    );
  });
  test('Testa se o componente é renderizado', () => {
    const categories = screen.getByTestId('category-card');

    expect(categories).toBeInTheDocument();
  });
  test('Testa se os cards tem quantidade correta', () => {
    const categories = screen.getAllByTestId('category-card-input');

    expect(categories).toHaveLength(10);
  });
  test('Testa se o componente possui os nomes das categorias', () => {
    const firstCard = screen.getByTestId('category-card-Todos');

    expect(firstCard).toHaveTextContent('Todos');

    const lastCard = screen.getByTestId('category-card-Financeiro');

    expect(lastCard).toHaveTextContent('Financeiro');
  });
  test('Testa se o componente muda a classe para mudança de cor de fundo ao ser clicado', () => {
    const categoryCard = screen.getByTestId('category-card-btn-Todos');

    userEvent.click(categoryCard);
    expect(categoryCard).toHaveClass('focused');
  });
});
