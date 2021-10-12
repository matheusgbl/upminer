/* eslint-disable no-undef */
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';

import App from '../App';
import renderWithRouter from '../renderWithRouter';

const cardAbout =
  'O aplicativo Balanço Patrimonial realiza a consulta de todos ' +
  'os balanços que são publicados nos Diários Oficiais de Empresas S.A., de capital ' +
  'aberto e limitadas (LTDA) de grande porte. Tenha acesso aos principais eventos ' +
  'corporativos de uma empresa, como: marcos jurídicos, mudança no quadro societário, ' +
  'aumento de capital reportagens e muito mais.';

const moreAbout =
  'Após realizar a consulta, o histórico é salvo automaticamente, tornando as informações ' +
  'acessíveis ao usuário. A linha do tempo pode também ser exportada no formato PDF.';

test('Testa se a página de detalhes é renderizada com os dados corretos ao clicar no botão do card de serviço', () => {
  renderWithRouter(<App />);
  const cardBtn = screen.getByTestId('service-card-btn-3');
  userEvent.click(cardBtn);

  const detailPage = screen.getByTestId('detail-page');
  expect(detailPage).toBeInTheDocument();

  const returnLink = screen.getByTestId('return-link');

  expect(returnLink).toHaveTextContent('Profissional');
  expect(returnLink).toHaveAttribute('href', '/');

  const serviceCards = screen.getByTestId('service-detail-card');

  expect(serviceCards).toBeInTheDocument();

  const serviceAbout = screen.getByTestId('detail-description');

  expect(serviceAbout).toHaveTextContent(cardAbout);

  const serviceMoreAbout = screen.getByTestId('detail-more-about');

  expect(serviceMoreAbout).toHaveTextContent(moreAbout);

  const btnCoin = screen.getByTestId('button-component-coin-3');
  const btnPrice = screen.getByTestId('button-component-price-3');
  const btnText = screen.getByTestId('button-component-link-3');

  expect(btnCoin).toHaveTextContent('R$');
  expect(btnPrice).toHaveTextContent('69,99');
  expect(btnText).toHaveTextContent('Habilitar');
});
