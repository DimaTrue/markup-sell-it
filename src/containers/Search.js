import { connect } from 'react-redux';

import Search from '../components/CommonComponents/Search/Search';

import { searchProducts } from '../actions/search-products';


const mapDispatchToProps = dispatch => ({
    searchProducts: (value) => dispatch(searchProducts(value))
})

export default connect(null, mapDispatchToProps)(Search);