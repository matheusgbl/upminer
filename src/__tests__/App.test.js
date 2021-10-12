/* eslint-disable no-undef */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Services from '../components/CardServices';
import Header from '../components/Header';
import OrderInput from '../components/OrderInput';
import SelectCategory from '../components/SelectCategory';
import renderWithRouter from '../renderWithRouter';

const about =
  'O aplicativo Histórico Empresarial permite ao usuário ter acesso' +
  'a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação.';

const serviceCardDescription =
  'O aplicativo Balanço Patrimonial realiza a consulta de' +
  'todos os balanços que são publicados nos Diários Oficiais de Empresas S.A.,' +
  'de capital aberto e limitadas (LTDA) de grande porte.';

const headerContent = [
  {
    about: about,
    service: 'Histórico Empresarial 1',
    price: '29,99',
    id: 0,
  },
  {
    about: about,
    service: 'Histórico Empresarial 2',
    price: '49,99',
    id: 1,
  },
  {
    about: about,
    service: 'Histórico Empresarial 3',
    price: '69,99',
    id: 2,
  },
];

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
    price: '19,99',
    serviceName: 'Profissional',
    description: serviceCardDescription,
  },
];

jest.setTimeout(30000);
const handleClick = jest.fn();

describe.skip('Testa o componente Header', () => {
  beforeEach(() => {
    renderWithRouter(<Header headerBannerContent={headerContent} />);
  });
  test('Testa se o component Header é renderizado', () => {
    const headerElement = screen.getByTestId('header-component');
    expect(headerElement).toBeInTheDocument();
  });
  test('Testa se o componente Header possui a logo do serviço', () => {
    const logoImg1 = screen.getByAltText('up-miner-logo-0');
    const logoImg2 = screen.getByAltText('up-miner-logo-1');
    const logoImg3 = screen.getByAltText('up-miner-logo-2');
    expect(logoImg1).toBeInTheDocument();
    expect(logoImg2).toBeInTheDocument();
    expect(logoImg3).toBeInTheDocument();
  });
  test('Testa se o componente Header possui os nomes dos serviços', () => {
    const firstHeading = screen.getByText('| Histórico Empresarial 1');
    const secondHeading = screen.getByText('| Histórico Empresarial 2');
    const thirdHeading = screen.getByText('| Histórico Empresarial 3');

    expect(firstHeading).toBeInTheDocument();
    expect(secondHeading).toBeInTheDocument();
    expect(thirdHeading).toBeInTheDocument();
  });
  test('Testa se o componente Header possui texto com informação do serviço', () => {
    const serviceText = screen.getByTestId('service-about-0');
    expect(serviceText).toHaveTextContent(about);
  });
  test('Testa se o component Header possui o valor dos serviços', () => {
    const realCoin = 'R$';

    const servicePrice1 = screen.getByTestId('button-component-price-0');
    const serviceCoin1 = screen.getByTestId('button-component-coin-0');

    expect(servicePrice1).toHaveTextContent('29,99');
    expect(serviceCoin1).toHaveTextContent(realCoin);

    const servicePrice2 = screen.getByTestId('button-component-price-1');
    const serviceCoin2 = screen.getByTestId('button-component-coin-1');

    expect(servicePrice2).toHaveTextContent('49,99');
    expect(serviceCoin2).toHaveTextContent(realCoin);

    const servicePrice3 = screen.getByTestId('button-component-price-2');
    const serviceCoin3 = screen.getByTestId('button-component-coin-2');

    expect(servicePrice3).toHaveTextContent('69,99');
    expect(serviceCoin3).toHaveTextContent(realCoin);
  });
  test('Testa se o componente Header possui um botão com o texto saiba mais', () => {
    const button1 = screen.getByTestId('button-component-link-0');
    expect(button1).toHaveTextContent('Saiba mais');

    const button2 = screen.getByTestId('button-component-link-1');
    expect(button2).toHaveTextContent('Saiba mais');

    const button3 = screen.getByTestId('button-component-link-2');
    expect(button3).toHaveTextContent('Saiba mais');
  });
  test('Testa se o componente Header possui funcionalidade de Carousel', async () => {
    const carouselLength = screen.getAllByTestId('header-carousel');
    expect(carouselLength).toHaveLength(3);

    const carouselElement = screen.getByTestId('carousel-item');
    expect(carouselElement).toHaveStyle('transform: translateX(-0%)');

    await new Promise((r) => setTimeout(r, 5000));
    expect(carouselElement).toHaveStyle('transform: translateX(-100%)');
  });
});

describe.skip('Testa o componente de cards com os filtros de categorias', () => {
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

describe.skip('Testa o componente de ordenação dos serviços', () => {
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

describe('Testa o componente de cards de serviços disponíveis', () => {
  beforeEach(() => {
    renderWithRouter(<Services services={serviceContent} onSelectCard={handleClick} />);
  });
  test.skip('Testa se o componente de cards de serviços é renderizado', () => {
    const serviceCard = screen.getByTestId('service-cards');

    expect(serviceCard).toBeInTheDocument();
  });
  test.skip('Testa se possui um total de 12 cards de serviços', () => {
    const cardsLength = screen.getAllByTestId('service-card-content');

    expect(cardsLength).toHaveLength(12);
  });
  test.skip('Testa o texto do nome do serviço no card', () => {
    const firstCard = screen.getByTestId('service-card-info-3');

    expect(firstCard).toHaveTextContent('Profissional');

    const secondCard = screen.getByTestId('service-card-info-4');

    expect(secondCard).toHaveTextContent('Reguladores');

    const thirdCard = screen.getByTestId('service-card-info-5');

    expect(thirdCard).toHaveTextContent('Sócio Ambiental');
  });
  test.skip('Testa a descrição do serviço no card', () => {
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
});
