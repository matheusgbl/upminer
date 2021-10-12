/* eslint-disable no-undef */
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';

import App from '../App';
import renderWithRouter from '../renderWithRouter';

const about =
  'O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e ' +
  'acontecimentos relevantes de uma empresa desde o seu ano de fundação. ' +
  'Tenha acesso aos principais eventos corporativos de uma empresa, como: marcos jurídicos, ' +
  'mudança no quadro societário, aumento de capital reportagens e muito mais.';

const moreAbout =
  'Após realizar a consulta, o histórico é salvo automaticamente, tornando as informações ' +
  'acessíveis ao usuário. A linha do tempo pode também ser exportada no formato PDF.';

describe('Testa a página de detalhes', () => {
  test('Testa se a página de detalhes é renderizada com os dados corretos ao clicar no botão do header', () => {
    renderWithRouter(<App />);
    const headerBtn = screen.getByTestId('button-component-link-0');
    userEvent.click(headerBtn);

    const detailPage = screen.getByTestId('detail-page');
    expect(detailPage).toBeInTheDocument();

    const returnLink = screen.getByTestId('return-link');

    expect(returnLink).toHaveTextContent('Histórico Empresarial 1');
    expect(returnLink).toHaveAttribute('href', '/');

    const serviceCards = screen.getByTestId('service-detail-card');

    expect(serviceCards).toBeInTheDocument();

    const serviceAbout = screen.getByTestId('detail-description');

    expect(serviceAbout).toHaveTextContent(about);

    const serviceMoreAbout = screen.getByTestId('detail-more-about');

    expect(serviceMoreAbout).toHaveTextContent(moreAbout);

    const btnCoin = screen.getAllByTestId('button-component-coin-0');
    const btnPrice = screen.getAllByTestId('button-component-price-0');
    const btnText = screen.getAllByTestId('button-component-link-0');

    expect(btnCoin[1]).toHaveTextContent('R$');
    expect(btnPrice[1]).toHaveTextContent('29,99');
    expect(btnText[1]).toHaveTextContent('Habilitar');
  });
});
