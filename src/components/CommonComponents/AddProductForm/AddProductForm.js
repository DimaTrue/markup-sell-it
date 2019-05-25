import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { RenderField } from '../../../utils/redux-form/RenderField/RenderField';
import { validate } from '../../../utils/redux-form/validate';

import style from './AddProductForm.module.scss';


const AddProductForm = (props) => {
  const { submitting, params, handleSubmit, } = props;
  return (
    <div>
      <Header />
      <div className={style.section}>
        <div className={style.container}>
          <div className={style.wrap}>
            <h3>Add New Product:</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(params);
            }}>
              <Field
                name="theme"
                component={RenderField}
                type="text"
                label="theme"
              />
              <Field
                name="text"
                component={RenderField}
                type="text"
                label="text"
              />
              <Field
                name="price"
                component={RenderField}
                type="number"
                label="price"
              />
              <div className={style.act}>
                <label>Contract price</label>
                <Field
                  name="contract_price"
                  component={RenderField}
                  type="checkbox"
                  value="contract price"
                />
              </div>
              <Field
                name="location"
                component={RenderField}
                type="text"
                label="location"
              />
              <div className={style.act}>
                <label>Is Active</label>
                <Field
                  name="is_active"
                  component={RenderField}
                  type="checkbox"
                  value="is_active"
                />
              </div>
              <button
                className={style.formButton}
                type="submit"
                disabled={submitting}
              >
                Add Product
          </ button>
            </form>
          </div>
          <div className={style.lowerLink}>
            <Link className={style.link} to='/' >Return to Product List</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

AddProductForm.propTypes = {
  submitting: PropTypes.bool,
}

export default reduxForm({
  form: 'add_product',
  validate,
})(AddProductForm);