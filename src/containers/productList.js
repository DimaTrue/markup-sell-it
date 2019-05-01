import ProductList from '../components/ProductListPage/ProductList/ProductList';
import { fetchProducts } from '../actions/fetchProducts';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  data: state.products.data,
  isLoading: state.products.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
