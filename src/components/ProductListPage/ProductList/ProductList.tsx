import React, { Fragment } from 'react';
import Proptypes from 'prop-types';

import Header from '../../CommonComponents/Header/Header';
import Footer from '../../CommonComponents/Footer/Footer';
import ProductItem from '../ProductItem/ProductItem';
import { ProductsState, Product } from '../../../store/products/types';

import style from './ProductList.module.scss';


const ProductList = (props: ProductsState) => {
  const data: Product[] = props.data;
  const products = data && data.map(({ images, theme, pk }) => <ProductItem key={pk} img={images && images[0]} id={pk} title={theme} />);
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