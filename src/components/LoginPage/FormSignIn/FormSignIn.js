import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { validate } from '../../../utils/redux-form/validate';
import { RenderField } from '../../../utils/redux-form/RenderField/RenderField';

import style from './FormSignIn.module.scss';


const FormSignIn = (props) => {
  const { handleSubmit, submitting, } = props;
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Field
        name="email"
        component={RenderField}
        type="email"
        label="Email"
      />
      <Field
        name="password"
        component={RenderField}
        type="password"
        label="Password"
      />
      <button className={style.formButton}
        type="submit"
        disabled={submitting}
      >
        Login
        </ button>
    </form>
  );
}

FormSignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

export default reduxForm({
  form: 'authorization',
  validate,
})(FormSignIn);
