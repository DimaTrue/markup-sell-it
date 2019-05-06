import { connect } from 'react-redux';
import { searchProducts } from '../actions/search-products';
import Search from '../components/CommonComponents/Search/Search';

const mapDispatchToProps = dispatch => ({
    searchProducts: (value) => dispatch(searchProducts(value))
})

export default connect(null, mapDispatchToProps)(Search);