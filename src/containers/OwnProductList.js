import React from 'react';
import { connect } from 'react-redux';

import OwnProductList from '../components/CommonComponents/OwnProductList/OwnProductList';
import LoadingHoc from '../components/CommonComponents/Hoc/LoadingHoc';

import { ProductsActionTypes } from '../store/products/types'


class OwnProducts extends React.Component {
  componentDidMount() {
    this.props.fetchOwnProducts();
  }

  render() {
    return (
      <LoadingHoc loadingProps={this.props.isLoadingOwnProducts} component={OwnProductList} {...this.props} />
    )
  }
}
const mapStateToProps = state => ({
  ownProducts: state.products.ownProducts,
  isLoadingOwnProducts: state.products.isLoadingOwnProducts,
  errorOwnProducts: state.products.errorOwnProducts,
});

const mapDispatchToProps = dispatch => ({
  fetchOwnProducts: () => dispatch({ type: ProductsActionTypes.FETCH_OWN_PRODUCTS }),
})

export default connect(mapStateToProps, mapDispatchToProps)(OwnProducts);
