import { connect } from 'react-redux';

import AddProductForm from '../components/CommonComponents/AddProductForm/AddProductForm';

import { PRODUCT_ADD } from '../action-types/products';


const mapStateToProps = state => ({
  params: state.form.add_product && state.form.add_product.values
});

const mapDispatchToProps = dispatch => ({
  addProduct: (params) => dispatch({ type: PRODUCT_ADD, payload: params })
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);