import React from 'react';
import OwnProductItem from '../../../containers/OwnProductItem';

import style from './OwnProductList.module.scss';


const OwnProductList = (props) => {
  const { ownProducts } = props;
  const ownProductsList = (ownProducts &&
    ownProducts.length &&
    ownProducts.map(({ images, theme, pk }, index) => <OwnProductItem key={index}
      img={images[0]}
      id={pk}
      title={theme} />)) ||
    `Sorry, You haven't own products yet.`

  return (
    <div className={style.OwnProducts}>
      {ownProductsList}
    </div>
  );
}

export default OwnProductList;