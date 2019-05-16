import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../components/ProductListPage/ProductList/ProductList';

import { FETCH_PRODUCTS } from '../action-types/products';
import LoadingHoc from '../components/CommonComponents/Hoc/LoadingHoc';

class Products extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <LoadingHoc loadingProps={this.props.isLoading} component={ProductList} {...this.props} />
    )
  }
}
const mapStateToProps = state => ({
  data: state.products.data,
  isLoading: state.products.isLoading,
  error: state.products.error,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch({ type: FETCH_PRODUCTS }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);
