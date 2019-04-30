import React, { Fragment } from 'react';
import Header from '../../CommonComponents/Header/Header';
import Footer from '../../CommonComponents/Footer/Footer';
import ProductItem from '../ProductItem/ProductItem';
import Proptypes from 'prop-types';
import style from './ProductList.module.scss';


const ProductList = ({ logout, isAuthentificated, data }) => (
  <Fragment>
    <Header logout={logout} isAuthentificated={isAuthentificated} />
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.productList}>
          {data.map(({ images }, index) => <ProductItem key={index} img={images[0]} id={index} />)}
        </div>
      </div>
    </div>
    <Footer />
  </Fragment>
);
ProductList.propTypes = {
  data: Proptypes.array,
};
export default ProductList;
