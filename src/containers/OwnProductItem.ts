import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import OwnProductItem from '../components/CommonComponents/OwnProductItem/OwnProductItem';

import { removeProductItemRequest } from '../actions/products';


const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteProductItem: (itemIndex: number) => dispatch(removeProductItemRequest(itemIndex))
})

export default connect(null, mapDispatchToProps)(OwnProductItem); 
