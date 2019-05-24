import React from 'react';
import { connect } from 'react-redux';

import AddProductForm from '../components/CommonComponents/AddProductForm/AddProductForm';

import { ProductsActionTypes } from '../store/products/types'


class AddProduct extends React.Component {

  submit = (params) => {
    this.props.addProduct(params);
  }

  render() {
    return (<AddProductForm onSubmit={this.submit} />);
  }
}

const mapStateToProps = state => ({
  params: state.form.add_product && state.form.add_product.values
});

const mapDispatchToProps = dispatch => ({
  addProduct: (params) => dispatch({ type: ProductsActionTypes.PRODUCT_ADD, payload: params })
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);