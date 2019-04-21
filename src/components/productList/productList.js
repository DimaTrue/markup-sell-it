import React, {Fragment} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import data from '../../data/data';
import ProductItem from '../productItem/productItem';

class ProductList extends React.Component {
  render() {
    
    return (
    <Fragment>
      <Header />
    <div className="section">
      <div className="container">
        <div className="product-list">
        {data.products.map(({id, img, eye}) => <ProductItem key={id} img={img} eye={eye}/>)}
        </div>
      </div>
    </div>
    <Footer />
    </Fragment>
    );
  }
}

export default ProductList;
