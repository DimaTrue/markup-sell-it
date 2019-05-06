import ProductItemPage from '../components/ProductItemPage/ProductItemPage';
import { connect } from 'react-redux';
import { FETCH_PRODUCT_ITEM } from '../action-types/products';

const mapStateToProps = state => ({
  productItem: state.products.productItem,
  isLoadingItem: state.products.isLoadingItem,
  errorItem: state.products.errorItem,
});

// itemIndex is a value of this.props.match.params.id of current product

const mapDispatchToProps = dispatch => ({
  fetchProductItem: (itemIndex) => dispatch({ type: FETCH_PRODUCT_ITEM, payload: itemIndex })
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemPage);
