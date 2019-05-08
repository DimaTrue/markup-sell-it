import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { validate } from '../../../utils/redux-form/validate';
import { RenderField } from '../../../utils/redux-form/RenderField/RenderField';

import style from './FormRegistration.module.scss';


class FormRegistration extends React.Component {

  submit = () => {
    this.props.history.push('/login/success')
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form className={style.form} onSubmit={handleSubmit(this.submit)}>
        <Field
          className={style.formInput}
          name="username"
          component={RenderField}
          type="text"
          label="Create your username"
        />
        <Field
          className={style.formInput}
          name="email"
          component={RenderField}
          type="email"
          label="Email"
        />
        <Field
          className={style.formInput}
          name="password"
          component={RenderField}
          type="password"
          label="Password"
        />
        <Field
          className={style.formInput}
          name="confirmpassword"
          component={RenderField}
          type="password"
          label="Confirm the Password"
        />
        <button
          className={style.formButton}
          type="submit"
          disabled={submitting}
        >
          Registration
          </ button>
      </form>
    );
  }
}

FormRegistration.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

FormRegistration = reduxForm({
  form: 'registration',
  validate,
})(FormRegistration)

export default FormRegistration;
