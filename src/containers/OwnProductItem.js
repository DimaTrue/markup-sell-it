import { connect } from 'react-redux';

import OwnProductItem from '../components/CommonComponents/OwnProductItem/OwnProductItem';

import { ProductsActionTypes } from '../store/products/types'


const mapDispatchToProps = dispatch => ({
  deleteProductItem: (itemIndex) => dispatch({ type: ProductsActionTypes.DELETE_PRODUCT_ITEM, payload: itemIndex })
})

export default connect(null, mapDispatchToProps)(OwnProductItem); 
