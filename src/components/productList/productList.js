import React, { Fragment } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import data from '../../data/data';
import ProductItem from '../productItem/productItem';
import Proptypes from 'prop-types';
import style from './productList.module.scss'; ////module css!!!!


const ProductList = () => (
  <Fragment>
    <Header />
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.productList}>
          {data.products.map(({ id, img, eye }) => <ProductItem key={id} img={img} eye={eye} />)}
        </div>
      </div>
    </div>
    <Footer />
  </Fragment>
);
ProductList.propTypes ={
  data: Proptypes.array,
};
export default ProductList;
