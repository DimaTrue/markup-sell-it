import { connect } from 'react-redux';

import Search from '../components/CommonComponents/Search/Search';

import { searchProducts } from '../actions/products';

const mapStateToProps = state => ({
    value: state.products.filterSymbol,
})
const mapDispatchToProps = dispatch => ({
    searchProducts: (value) => dispatch(searchProducts(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);