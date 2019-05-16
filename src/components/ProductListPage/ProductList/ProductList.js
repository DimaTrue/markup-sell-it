import React, { Fragment } from 'react';
import Proptypes from 'prop-types';

import Header from '../../CommonComponents/Header/Header';
import Footer from '../../CommonComponents/Footer/Footer';
import ProductItem from '../ProductItem/ProductItem';

import style from './ProductList.module.scss';


const ProductList = (props) => {
  const products = props.data && props.data.map(({ images, theme, pk }, index) => <ProductItem key={index} img={images[0]} id={pk} title={theme} />);
  return (
    <Fragment>
      <Header />
      <div className={style.section}>
        <div className={style.container}>
          <div className={style.productList}>
            {products}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

ProductList.propTypes = {
  isLoading: Proptypes.bool,
  error: Proptypes.object,
};

export default ProductList;