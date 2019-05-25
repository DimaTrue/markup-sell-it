import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Search from '../components/CommonComponents/Search/Search';

import { ApplicationState } from '../store/store';
import { findProducts } from '../actions/products';

const mapStateToProps = (state: ApplicationState) => ({
    value: state.products.filterSymbol,
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
    searchProducts: (value: string) => dispatch(findProducts(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);