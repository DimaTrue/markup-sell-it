import { connect } from 'react-redux';

import ProductList from '../components/ProductListPage/ProductList/ProductList';

import { FETCH_PRODUCTS } from '../action-types/products';


const mapStateToProps = state => ({
  data: state.products.data.filter((el) => el.theme.toLowerCase().includes(state.products.filterSymbol)),
  isLoading: state.products.isLoading,
  error: state.products.error,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch({ type: FETCH_PRODUCTS })
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
