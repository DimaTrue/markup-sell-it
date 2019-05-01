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
    const { isLoading } = this.props;
    if (isLoading) {
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
                {this.props.data.map(({ images, theme }, index) => <ProductItem key={index} img={images[0]} id={index} title={theme} />)}
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
  data: Proptypes.array,
};


export default ProductList;