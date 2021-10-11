import { createContext, useCallback, useState } from 'react';
import {
  FaBan,
  FaGavel,
  FaGlobe,
  FaGlobeAmericas,
  FaLandmark,
  FaMale,
  FaPiggyBank,
  FaSketch,
  FaSuitcase,
  FaTree,
} from 'react-icons/fa';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const about = `O aplicativo Histórico Empresarial permite ao usuário ter acesso a
  todos os fatos e acontecimentos relevantes de uma empresa desde o seu
  ano de fundação.`;

  const serviceDescription = `Tenha acesso aos principais eventos corporativos
  de uma empresa, como: marcos jurídicos, mudança no quadro societário, aumento
  de capital reportagens e muito mais.

  Após realizar a consulta, o histórico é salvo automaticamente, tornando as
  informações acessíveis ao usuário. A linha do tempo pode também ser exportada
  no formato PDF.`;

  const fullProductHeaderDescription = `${about} ${serviceDescription}`;

  const serviceCardDescription = `O aplicativo Balanço Patrimonial realiza a consulta de
  todos os balanços que são publicados nos Diários Oficiais de Empresas S.A.,
  de capital aberto e limitadas (LTDA) de grande porte.`;

  const fullProductCardDescription = `${serviceCardDescription} ${serviceDescription}`;

  const [headerContent] = useState([
    {
      id: 0,
      about: about,
      product: 'Histórico Empresarial 1',
      price: '29,99',
      description: fullProductHeaderDescription,
    },
    {
      about: about,
      product: 'Histórico Empresarial 2',
      price: '49,99',
      id: 1,
      description: fullProductHeaderDescription,
    },
    {
      about: about,
      product: 'Histórico Empresarial 3',
      price: '69,99',
      id: 2,
      description: fullProductHeaderDescription,
    },
  ]);

  const [categoryContent] = useState([
    {
      name: 'Todos',
      icon: <FaGlobe />,
      focusClass: 'main-page__category 1 focused',
      notFocusClass: 'main-page__category 1',
    },
    {
      name: 'Profissional',
      icon: <FaSuitcase />,
      focusClass: 'main-page__category 2 focused',
      notFocusClass: 'main-page__category 2',
    },
    {
      name: 'Reguladores',
      icon: <FaLandmark />,
      focusClass: 'main-page__category 3 focused',
      notFocusClass: 'main-page__category 3',
    },
    {
      name: 'Sócio Ambiental',
      icon: <FaTree />,
      focusClass: 'main-page__category 4 focused',
      notFocusClass: 'main-page__category 4',
    },
    {
      name: 'Jurídico',
      icon: <FaGavel />,
      focusClass: 'main-page__category 5 focused',
      notFocusClass: 'main-page__category 5',
    },
    {
      name: 'Listas Restritivas',
      icon: <FaBan />,
      focusClass: 'main-page__category 6 focused',
      notFocusClass: 'main-page__category 6',
    },
    {
      name: 'Mídia / Internet',
      icon: <FaGlobeAmericas />,
      focusClass: 'main-page__category 7 focused',
      notFocusClass: 'main-page__category 7',
    },
    {
      name: 'Bens e Imóveis',
      icon: <FaSketch />,
      focusClass: 'main-page__category 8 focused',
      notFocusClass: 'main-page__category 8',
    },
    {
      name: 'Cadastro',
      icon: <FaMale />,
      focusClass: 'main-page__category 9 focused',
      notFocusClass: 'main-page__category 9',
    },
    {
      name: 'Financeiro',
      icon: <FaPiggyBank />,
      focusClass: 'main-page__category 10 focused',
      notFocusClass: 'main-page__category 10',
    },
  ]);

  const [productContent] = useState([
    {
      id: 3,
      icon: <FaSuitcase />,
      price: '69,99',
      productName: 'Profissional',
      description: serviceCardDescription,
      fullDescription: fullProductCardDescription,
    },
    {
      id: 4,
      icon: <FaLandmark />,
      price: '59,99',
      productName: 'Reguladores',
      description: serviceCardDescription,
      fullDescription: fullProductCardDescription,
    },
    {
      id: 5,
      icon: <FaTree />,
      price: '19,99',
      productName: 'Sócio Ambiental',
      description: serviceCardDescription,
      fullDescription: fullProductCardDescription,
    },
    {
      id: 6,
      icon: <FaGavel />,
      price: '89,99',
      productName: 'Jurídico',
      description: serviceCardDescription,
      fullDescription: fullProductCardDescription,
    },
    {
      id: 7,
      icon: <FaBan />,
      price: '29,99',
      productName: 'Listas Restritivas',
      description: serviceCardDescription,
      fullDescription: fullProductCardDescription,
    },
    {
      id: 8,
      icon: <FaGlobeAmericas />,
      price: '49,99',
      productName: 'Mídia / Internet',
      description: serviceCardDescription,
      fullDescription: fullProductCardDescription,
    },
    {
      id: 9,
      icon: <FaSketch />,
      price: '69,99',
      productName: 'Bens e Imóveis',
      description: serviceCardDescription,
      fullDescription: fullProductCardDescription,
    },
    {
      id: 10,
      icon: <FaMale />,
      price: '39,99',
      productName: 'Cadastro',
      description: serviceCardDescription,
      fullDescription: fullProductCardDescription,
    },
    {
      id: 11,
      icon: <FaPiggyBank />,
      price: '19,99',
      productName: 'Financeiro',
      description: serviceCardDescription,
      fullDescription: fullProductCardDescription,
    },
    {
      id: 12,
      icon: <FaPiggyBank />,
      price: '59,99',
      productName: 'Financeiro',
      description: serviceCardDescription,
      fullDescription: fullProductCardDescription,
    },
    {
      id: 13,
      icon: <FaTree />,
      price: '39,99',
      productName: 'Profissional',
      description: serviceCardDescription,
      fullDescription: fullProductCardDescription,
    },
    {
      id: 14,
      icon: <FaGavel />,
      price: '19,99',
      productName: 'Profissional',
      description: serviceCardDescription,
      fullDescription: fullProductCardDescription,
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [isFiltered, setIsFiltered] = useState(false);

  const [sortBy, setSortBy] = useState('');

  const handleCategory = useCallback(
    (input) => {
      if (input === 'Todos') {
        setFilteredProducts(productContent);
      } else {
        const filterResult = productContent.filter((product) =>
          product.productName.includes(input),
        );
        setFilteredProducts(filterResult);
        setIsFiltered(true);
      }
    },
    [productContent],
  );

  const handleSort = useCallback(
    (input) => {
      let productSortArr;

      isFiltered
        ? (productSortArr = filteredProducts)
        : (productSortArr = productContent);

      if (input === 'preco') {
        productSortArr.sort((a, b) =>
          a.price < b.price ? 1 : b.price < a.price ? -1 : 0,
        );
      } else {
        productSortArr.sort((a, b) =>
          a.productName > b.productName ? 1 : b.productName > a.productName ? -1 : 0,
        );
      }
      setSortBy(input);
      setFilteredProducts(productSortArr);
      setIsFiltered(true);
    },
    [isFiltered, productContent, filteredProducts],
  );

  return (
    <DataContext.Provider
      value={{
        headerContent,
        categoryContent,
        sortBy,
        isFiltered,
        productContent,
        filteredProducts,
        handleCategory,
        handleSort,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
