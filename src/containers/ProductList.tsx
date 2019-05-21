import React from 'react';
import { connect } from 'react-redux';
import * as Redux from 'redux';

import ProductList from '../components/ProductListPage/ProductList/ProductList';

import { FETCH_PRODUCTS } from '../action-types/products';
import LoadingHoc from '../components/CommonComponents/Hoc/LoadingHoc';


interface Values {
  fetchProducts: any;
  isLoading: any;
}

class Products extends React.Component {



  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }
  render() {
    const { isLoading } = this.props;
    return (
      <LoadingHoc loadingProps={isLoading} component={ProductList} {...this.props} />
    )
  }
}
const mapStateToProps = (state: any) => ({
  data: state.products.data,
  isLoading: state.products.isLoading,
  error: state.products.error,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => ({
  fetchProducts: () => dispatch({ type: FETCH_PRODUCTS }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);
