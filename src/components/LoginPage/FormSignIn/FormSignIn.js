import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { validate } from '../../../utils/redux-form/validate';
import { RenderField } from '../../../utils/redux-form/RenderField/RenderField';

import style from './FormSignIn.module.scss';


class FormSignIn extends React.Component {

  login = (e) => {
    this.props.login();
    this.setState({ redirectToNewPage: true });
    this.props.fetchUser();
    this.props.history.push('/');
  };

  render() {
    const { handleSubmit, submitting } = this.props;
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


// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0NDgsInVzZXJuYW1lIjoiRGltYVRydWUiLCJvcmlnX2lhdCI6MTU1NzI0NzU5MSwiZXhwIjoxNTU3MjU4MzkxLCJlbWFpbCI6Im1vbnRpZmlja0ByYW1ibGVyLnJ1In0.WKJk6FlfytvguGY5WFcnTgB6Xn1t-FGHpqDl4Juiedg",
//   "user": {
//   "id": 448,
//   "username": "DimaTrue",
//   "email": "montifick@rambler.ru",
//   "first_name": "",
//   "last_name": "",
//   "avatar": null,
//   "location": null,
//   "color_scheme": null,
//   "language": null
//   }
//   }