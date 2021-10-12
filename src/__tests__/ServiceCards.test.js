/* eslint-disable no-undef */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';

import Services from '../components/CardServices';
import renderWithRouter from '../renderWithRouter';

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

describe('Testa o componente de cards de serviços disponíveis', () => {
  beforeEach(() => {
    renderWithRouter(<Services services={serviceContent} onSelectCard={handleClick} />);
  });
  test('Testa se o componente de cards de serviços é renderizado', () => {
    const serviceCard = screen.getByTestId('service-cards');

    expect(serviceCard).toBeInTheDocument();
  });
  test('Testa se possui um total de 12 cards de serviços', () => {
    const cardsLength = screen.getAllByTestId('service-card-content');

    expect(cardsLength).toHaveLength(12);
  });
  test('Testa o texto do nome do serviço no card', () => {
    const firstCard = screen.getByTestId('service-card-info-3');

    expect(firstCard).toHaveTextContent('Profissional');

    const secondCard = screen.getByTestId('service-card-info-4');

    expect(secondCard).toHaveTextContent('Reguladores');

    const thirdCard = screen.getByTestId('service-card-info-5');

    expect(thirdCard).toHaveTextContent('Sócio Ambiental');
  });
  test('Testa a descrição do serviço no card', () => {
    const firstCard = screen.getByTestId('service-card-description-3');

    expect(firstCard).toHaveTextContent(serviceCardDescription);

    const secondCard = screen.getByTestId('service-card-description-4');

    expect(secondCard).toHaveTextContent(serviceCardDescription);

    const thirdCard = screen.getByTestId('service-card-description-5');

    expect(thirdCard).toHaveTextContent(serviceCardDescription);
  });
  test('Testa se o card possui um botão com o preço e um texto de saiba mais', () => {
    const btnText = 'Saiba mais';
    const btnCoin = 'R$';

    const cardBtn1 = screen.getByTestId('service-card-btn-3');

    expect(cardBtn1).toHaveTextContent(btnCoin);
    expect(cardBtn1).toHaveTextContent('69,99');
    expect(cardBtn1).toHaveTextContent(btnText);

    const cardBtn2 = screen.getByTestId('service-card-btn-4');

    expect(cardBtn2).toHaveTextContent(btnCoin);
    expect(cardBtn2).toHaveTextContent('59,99');
    expect(cardBtn2).toHaveTextContent(btnText);

    const cardBtn3 = screen.getByTestId('service-card-btn-5');

    expect(cardBtn3).toHaveTextContent(btnCoin);
    expect(cardBtn3).toHaveTextContent('19,99');
    expect(cardBtn3).toHaveTextContent(btnText);
  });
  test('Testa se o botão de saiba mais possui o link correto para nova página', () => {
    const cardBtn1 = screen.getByTestId('service-card-btn-3');

    expect(cardBtn1).toHaveAttribute('href', '/product-detail/3');

    const cardBtn2 = screen.getByTestId('service-card-btn-4');

    expect(cardBtn2).toHaveAttribute('href', '/product-detail/4');
  });
  test('Testa se ao clicar no botão de saiba mais do card, é redirecionado para página de detalhes', () => {
    const history = createMemoryHistory();
    const cardBtn1 = screen.getByTestId('service-card-btn-3');
    const href = cardBtn1.getAttribute('href');
    userEvent.click(cardBtn1);
    history.push(href);

    const url = history.location.pathname;
    expect(url).toBe('/product-detail/3');
  });
});
