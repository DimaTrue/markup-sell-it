import React, { Fragment } from 'react';
import Header from '../../CommonComponents/Header/Header';
import Footer from '../../CommonComponents/Footer/Footer';
import ProductItem from '../ProductItem/ProductItem';
import Proptypes from 'prop-types';
import style from './ProductList.module.scss';
import Loading from '../../CommonComponents/Loading/Loading';


class ProductList extends React.Component {

  async componentDidMount() {
    await this.props.fetchProducts();
  }

  render() {
    const { isLoading, error } = this.props;
    if (error !== null) {
      return (
        <Fragment>
          <Header />
          <div className={style.section}>
            <h2 className={style.heading}>Error</h2>
            <p className={style.status}>{error.response.status}</p>
            <p className={style.text}>{error.response.statusText}</p>
          </div>
          <Footer />
        </Fragment>
      );
    } else if (isLoading) {
      return (
        <Fragment>
          <Header />
          <Loading />
          <Footer />
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Header />
          <div className={style.section}>
            <div className={style.container}>
              <div className={style.productList}>
                {this.props.data.map(({ images, theme, pk }, index) => <ProductItem key={index} img={images[0]} id={pk} title={theme} />)}
              </div>
            </div>
          </div>
          <Footer />
        </Fragment>
      );
    }
  }
}

ProductList.propTypes = {
  isLoading: Proptypes.bool,
  error: Proptypes.object,
};

export default ProductList;