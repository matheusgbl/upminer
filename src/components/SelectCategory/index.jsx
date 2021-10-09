import '../../styles/categories.scss';

import React from 'react';
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

import CategoryCard from './CategoryCard';

const SelectCategory = () => {
  return (
    <div className="main-page__categories">
      <CategoryCard
        name="Todos"
        icon={<FaGlobe />}
        focusClass="main-page__category 1 focused"
        notFocusClass="main-page__category 1"
        value="Todos"
      />
      <CategoryCard
        name="Profissional"
        icon={<FaSuitcase />}
        focusClass="main-page__category 2 focused"
        notFocusClass="main-page__category 2"
        value="Profissional"
      />
      <CategoryCard
        name="Reguladores"
        icon={<FaLandmark />}
        focusClass="main-page__category 3 focused"
        notFocusClass="main-page__category 3"
        value="Reguladores"
      />
      <CategoryCard
        name="Sócio Ambiental"
        icon={<FaTree />}
        focusClass="main-page__category 4 focused"
        notFocusClass="main-page__category 4"
        value="Ambiental"
      />
      <CategoryCard
        name="Jurídico"
        icon={<FaGavel />}
        focusClass="main-page__category 5 focused"
        notFocusClass="main-page__category 5"
        value="Jurídico"
      />
      <CategoryCard
        name="Listas Restritivas"
        icon={<FaBan />}
        focusClass="main-page__category 6 focused"
        notFocusClass="main-page__category 6"
        value="Restritivas"
      />
      <CategoryCard
        name="Mídia / Internet"
        icon={<FaGlobeAmericas />}
        focusClass="main-page__category 7 focused"
        notFocusClass="main-page__category 7"
        value="Mídia"
      />
      <CategoryCard
        name="Bens e Imóveis"
        icon={<FaSketch />}
        focusClass="main-page__category 8 focused"
        notFocusClass="main-page__category 8"
        value="Bens"
      />
      <CategoryCard
        name="Cadastro"
        icon={<FaMale />}
        focusClass="main-page__category 9 focused"
        notFocusClass="main-page__category 9"
        value="Cadastro"
      />
      <CategoryCard
        name="Financeiro"
        icon={<FaPiggyBank />}
        focusClass="main-page__category 10 focused"
        notFocusClass="main-page__category 10"
        value="Financeiro"
      />
    </div>
  );
};

export default SelectCategory;
