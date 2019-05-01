import ProductItemPage from '../components/ProductItemPage/ProductItemPage';
import { fetchProductItem } from '../actions/fetchProductItem';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  data: state.productItem.data,
  isLoading: state.productItem.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchProductItem: (n) => dispatch(fetchProductItem(n))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemPage);
