import { connect } from 'react-redux';

import OwnProductList from '../components/CommonComponents/OwnProductList/OwnProductList';

import { FETCH_OWN_PRODUCTS } from '../action-types/products';


const mapStateToProps = state => ({
  ownProducts: state.products.ownProducts,
  isLoadingOwnProducts: state.products.isLoadingOwnProducts,
  errorOwnProducts: state.products.errorOwnProducts,
});

const mapDispatchToProps = dispatch => ({
  fetchOwnProducts: () => dispatch({ type: FETCH_OWN_PRODUCTS }),
})

export default connect(mapStateToProps, mapDispatchToProps)(OwnProductList);
