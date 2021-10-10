import '../styles/home.scss';

import React, { useCallback, useState } from 'react';
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

import Header from '../components/Header';
import OrderInput from '../components/OrderInput';
import Products from '../components/Products';
import SelectCategory from '../components/SelectCategory';

const HomePage = () => {
  const about = `O aplicativo Histórico Empresarial permite ao usuário ter acesso a
    todos os fatos e acontecimentos relevantes de uma empresa desde o seu
    ano de fundação.`;

  const [headerContent] = useState([
    {
      about: about,
      product: 'Histórico Empresarial 1',
      price: '29,99',
    },
    {
      about: about,
      product: 'Histórico Empresarial 2',
      price: '49,99',
    },
    {
      about: about,
      product: 'Histórico Empresarial 3',
      price: '69,99',
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
      icon: <FaSuitcase />,
      price: '69,99',
      productName: 'Profissional',
    },
    {
      icon: <FaLandmark />,
      price: '59,99',
      productName: 'Reguladores',
    },
    {
      icon: <FaTree />,
      price: '19,99',
      productName: 'Sócio Ambiental',
    },
    {
      icon: <FaGavel />,
      price: '89,99',
      productName: 'Jurídico',
    },
    {
      icon: <FaBan />,
      price: '29,99',
      productName: 'Listas Restritivas',
    },
    {
      icon: <FaGlobeAmericas />,
      price: '49,99',
      productName: 'Mídia / Internet',
    },
    {
      icon: <FaSketch />,
      price: '69,99',
      productName: 'Bens e Imóveis',
    },
    {
      icon: <FaMale />,
      price: '39,99',
      productName: 'Cadastro',
    },
    {
      icon: <FaPiggyBank />,
      price: '19,99',
      productName: 'Financeiro',
    },
    {
      icon: <FaPiggyBank />,
      price: '59,99',
      productName: 'Financeiro',
    },
    {
      icon: <FaTree />,
      price: '39,99',
      productName: 'Profissional',
    },
    {
      icon: <FaGavel />,
      price: '19,99',
      productName: 'Profissional',
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
    <main className="main-page">
      <Header headerBannerContent={headerContent} />
      <div className="main-page__content">
        <SelectCategory categories={categoryContent} onSelectCard={handleCategory} />
        <OrderInput value={sortBy} onChangeValue={handleSort} />
        <Products products={!isFiltered ? productContent : filteredProducts} />
      </div>
    </main>
  );
};

export default HomePage;
