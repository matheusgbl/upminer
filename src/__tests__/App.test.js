/* eslint-disable no-undef */
import { screen } from '@testing-library/react';
import React from 'react';

import Header from '../components/Header';
import renderWithRouter from '../renderWithRouter';

const about =
  'O aplicativo Histórico Empresarial permite ao usuário ter acesso' +
  'a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação.';

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

jest.setTimeout(30000);

describe('Testa a página inicial', () => {
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

    const servicePrice1 = screen.getByTestId('header-price-0');
    const serviceCoin1 = screen.getByTestId('header-coin-0');

    expect(servicePrice1).toHaveTextContent('29,99');
    expect(serviceCoin1).toHaveTextContent(realCoin);

    const servicePrice2 = screen.getByTestId('header-price-1');
    const serviceCoin2 = screen.getByTestId('header-coin-1');

    expect(servicePrice2).toHaveTextContent('49,99');
    expect(serviceCoin2).toHaveTextContent(realCoin);

    const servicePrice3 = screen.getByTestId('header-price-2');
    const serviceCoin3 = screen.getByTestId('header-coin-2');

    expect(servicePrice3).toHaveTextContent('69,99');
    expect(serviceCoin3).toHaveTextContent(realCoin);
  });
  test('Testa se o componente Header possui um botão com o texto saiba mais', () => {
    const button1 = screen.getByTestId('header-btn-0');
    expect(button1).toHaveTextContent('Saiba mais');

    const button2 = screen.getByTestId('header-btn-1');
    expect(button2).toHaveTextContent('Saiba mais');

    const button3 = screen.getByTestId('header-btn-2');
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
