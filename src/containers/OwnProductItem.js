import { connect } from 'react-redux';

import OwnProductItem from '../components/CommonComponents/OwnProductItem/OwnProductItem';

import { DELETE_PRODUCT_ITEM } from '../action-types/products';


const mapDispatchToProps = dispatch => ({
  deleteProductItem: (itemIndex) => dispatch({ type: DELETE_PRODUCT_ITEM, payload: itemIndex })
})

export default connect(null, mapDispatchToProps)(OwnProductItem); 
