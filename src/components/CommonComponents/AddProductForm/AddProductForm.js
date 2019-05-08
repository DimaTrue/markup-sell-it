import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../../CommonComponents/Header/Header';
import Footer from '../../CommonComponents/Footer/Footer';

import { PRODUCT_ADD } from '../../../action-types/products'

import style from './AddProductForm.module.scss';


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <input {...input} type={type} placeholder={label} className={style.formInput} />
      {touched &&
        ((error && <span className={style.errorNotice}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  )


class AddProductForm extends React.Component {

  submit = (params) => {
    this.props.handleSubmit(params);
  }
  render() {
    const { submitting, params } = this.props;
    return (
      <div>
        <Header />
        <div className={style.section}>
          <div className={style.container}>
            <form onSubmit={() => this.submit(params)}>
              <Field
                className={style.formInput}
                name="theme"
                component={renderField}
                type="text"
                label="theme"
              />
              <Field
                className={style.formInput}
                name="text"
                component={renderField}
                type="text"
                label="text"
              />
              <Field
                className={style.formInput}
                name="price"
                component={renderField}
                type="number"
                label="price"
              />
              <Field
                className={style.formInput}
                name="currency"
                component={renderField}
                type="number"
                label="currency"
              />
              {/* <Field
          className={style.formInput}
          name="images"
          component={renderField}
          type="file"
          label="images"
        /> */}
              <Field
                className={style.formInput}
                name="contract_price"
                component={renderField}
                type="number"
                label="contract_price"
              />
              <Field
                className={style.formInput}
                name="location"
                component={renderField}
                type="text"
                label="location"
              />
              <Field
                className={style.formInput}
                name="category"
                component={renderField}
                type="text"
                label="category"
              />
              <Field
                className={style.formInput}
                name="activated_at"
                component={renderField}
                type="time"
                label="activated_at"
              />
              <Field
                className={style.formInput}
                name="activated_at"
                component={renderField}
                type="date"
                label="activated_at"
              />
              <span>Is Active</span>
              <Field
                className={style.formInput}
                name="is_active"
                component={renderField}
                type="checkbox"
                value="is_active"
              />
              <button
                className={style.formButton}
                type="submit"
                disabled={submitting}
              >
                Add Product
          </ button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

AddProductForm.propTypes = {
  submitting: PropTypes.bool,
}

AddProductForm = reduxForm({
  form: 'add_product',
})(AddProductForm)

const mapStateToProps = state => ({
  params: state.form.add_product && state.form.add_product.values
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (params) => dispatch({ type: PRODUCT_ADD, payload: params })
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);