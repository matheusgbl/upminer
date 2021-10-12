/* eslint-disable no-undef */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Services from '../components/CardServices';
import OrderInput from '../components/OrderInput';
import SelectCategory from '../components/SelectCategory';
import renderWithRouter from '../renderWithRouter';

let isFiltered = false;
let filteredServices;

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

const serviceCardDescription =
  'O aplicativo Balanço Patrimonial realiza a consulta de' +
  'todos os balanços que são publicados nos Diários Oficiais de Empresas S.A.,' +
  'de capital aberto e limitadas (LTDA) de grande porte.';

const serviceContent = [
  {
    id: 3,
    price: '69,99',
    serviceName: 'Profissional',
    description: serviceCardDescription,
  },
  {
    id: 4,
    price: '59,99',
    serviceName: 'Reguladores',
    description: serviceCardDescription,
  },
  {
    id: 5,
    price: '19,99',
    serviceName: 'Sócio Ambiental',
    description: serviceCardDescription,
  },
  {
    id: 6,
    price: '89,99',
    serviceName: 'Jurídico',
    description: serviceCardDescription,
  },
  {
    id: 7,
    price: '29,99',
    serviceName: 'Listas Restritivas',
    description: serviceCardDescription,
  },
  {
    id: 8,
    price: '49,99',
    serviceName: 'Mídia / Internet',
    description: serviceCardDescription,
  },
  {
    id: 9,
    price: '69,99',
    serviceName: 'Bens e Imóveis',
    description: serviceCardDescription,
  },
  {
    id: 10,
    price: '39,99',
    serviceName: 'Cadastro',
    description: serviceCardDescription,
  },
  {
    id: 11,
    price: '19,99',
    serviceName: 'Financeiro',
    description: serviceCardDescription,
  },
  {
    id: 12,
    price: '59,99',
    serviceName: 'Financeiro',
    description: serviceCardDescription,
  },
  {
    id: 13,
    price: '39,99',
    serviceName: 'Profissional',
    description: serviceCardDescription,
  },
  {
    id: 14,
    price: '12,99',
    serviceName: 'Profissional',
    description: serviceCardDescription,
  },
];

const handleClick = jest.fn();

describe('Testa a funcionalidade de ordenação e filtragem dos cards de serviços', () => {
  beforeEach(() => {
    renderWithRouter(
      <>
        <SelectCategory categories={categoryContent} onSelectCard={handleClick} />
        <OrderInput onChangeValue={handleClick} />
        <Services services={!isFiltered ? serviceContent : filteredServices} />
      </>,
    );
  });
  test('Testa se ao selecionar um card de categoria, os cards de serviços são filtrados', () => {
    const professionalCardBtn = screen.getByTestId('category-card-btn-Profissional');

    userEvent.click(professionalCardBtn);
    isFiltered = true;
    const filterProfResult = serviceContent.filter((service) =>
      service.serviceName.includes('Profissional'),
    );

    filteredServices = filterProfResult;
    expect(filteredServices).toHaveLength(3);

    const financeCardBtn = screen.getByTestId('category-card-btn-Financeiro');

    userEvent.click(financeCardBtn);
    isFiltered = true;
    const filterFinResult = serviceContent.filter((service) =>
      service.serviceName.includes('Financeiro'),
    );

    filteredServices = filterFinResult;
    expect(filteredServices).toHaveLength(2);

    const allCardBtn = screen.getByTestId('category-card-btn-Todos');

    userEvent.click(allCardBtn);
    isFiltered = true;
    const filterAllResult = serviceContent.filter(
      (service) => service.serviceName !== 'Todos',
    );

    filteredServices = filterAllResult;
    expect(filteredServices).toHaveLength(12);
  });
  test('Testa a ordenação dos cards ao selecionar ordenação por preço', () => {
    userEvent.selectOptions(screen.getByRole('combobox'), 'Preço');
    isFiltered = true;

    let filteredServices = serviceContent.sort((a, b) =>
      a.price < b.price ? 1 : b.price < a.price ? -1 : 0,
    );
    expect(filteredServices[0].serviceName).toBe('Jurídico');
    expect(filteredServices[0].price).toBe('89,99');
    expect(filteredServices[11].serviceName).toBe('Profissional');
    expect(filteredServices[11].price).toBe('12,99');
  });
  test('Testa a ordenação dos cards ao selecionar ordenação por lançamento', () => {
    userEvent.selectOptions(screen.getByRole('combobox'), 'Lançamento');
    isFiltered = true;

    let filteredServices = serviceContent.sort((a, b) =>
      a.serviceName < b.serviceName ? 1 : b.serviceName < a.serviceName ? -1 : 0,
    );
    expect(filteredServices[0].serviceName).toBe('Sócio Ambiental');
    expect(filteredServices[0].price).toBe('19,99');
    expect(filteredServices[11].serviceName).toBe('Bens e Imóveis');
    expect(filteredServices[11].price).toBe('69,99');
  });
});
