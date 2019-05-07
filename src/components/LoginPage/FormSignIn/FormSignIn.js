import React from 'react';
import style from './FormSignIn.module.scss';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 5) {
    errors.password = 'Must be 5 characters or more'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

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


class FormSignIn extends React.Component {
  state = {
    redirectToNewPage: false
  }

  login = (e) => {
    this.props.login();
    this.setState({ redirectToNewPage: true }),
    this.props.fetchUser();
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    if (this.state.redirectToNewPage) {
      return (<Redirect to="/" />);
    }
    return (
      <form className={style.form} onSubmit={handleSubmit(this.login)}>
        <Field
          name="email"
          component={renderField}
          type="email"
          label="Email"
        />
        <Field
          name="password"
          component={renderField}
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