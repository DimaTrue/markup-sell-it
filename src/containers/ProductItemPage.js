import React from 'react';
import { connect } from 'react-redux';

import ProductItemPage from '../components/ProductItemPage/ProductItemPage';
import LoadingHoc from '../components/CommonComponents/Hoc/LoadingHoc';

import { FETCH_PRODUCT_ITEM } from '../action-types/products';


class ProductItem extends React.Component {

  async componentDidMount() {
    this.props.fetchProductItem(this.props.computedMatch.params.id);
  }

  render() {
    return (<LoadingHoc loadingProps={this.props.isLoadingItem} component={ProductItemPage} {...this.props} />)
  }
}

const mapStateToProps = state => ({
  productItem: state.products.productItem,
  isLoadingItem: state.products.isLoadingItem,
  errorItem: state.products.errorItem,
});

// itemIndex is a value of this.props.match.params.id of current product

const mapDispatchToProps = dispatch => ({
  fetchProductItem: (itemIndex) => dispatch({ type: FETCH_PRODUCT_ITEM, payload: itemIndex })
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
