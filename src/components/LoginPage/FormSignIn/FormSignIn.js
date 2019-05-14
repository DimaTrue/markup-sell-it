import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { validate } from '../../../utils/redux-form/validate';
import { RenderField } from '../../../utils/redux-form/RenderField/RenderField';

import style from './FormSignIn.module.scss';


class FormSignIn extends React.Component {

  login = async () => {
    const { signIn, params } = this.props;
    signIn(params.values);
  };

  componentDidMount() {
    if (this.props.isLogin) {
      this.props.history.push('/');
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isLogin) {
      this.props.history.push('/');
    }
  }

  render() {
    const { handleSubmit, submitting, } = this.props;
    return (
      <form className={style.form} onSubmit={handleSubmit(this.login)}>
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
}

FormSignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

FormSignIn = reduxForm({
  form: 'authorization',
  validate,
})(FormSignIn)

export default FormSignIn;
