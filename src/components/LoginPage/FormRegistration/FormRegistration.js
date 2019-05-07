import React from 'react';
import style from './FormRegistration.module.scss';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

const validate = values => {
	const errors = {}
	if (!values.username) {
		errors.username = 'Required'
	} else if (values.username.length > 15) {
		errors.username = 'Must be 15 characters or less'
	}
	if (!values.password) {
		errors.password = 'Required'
	} else if (values.password.length < 5) {
		errors.password = 'Must be 5 characters or more'
	}
	if (!values.confirmpassword) {
		errors.confirmpassword = 'Required'
	} else if (values.confirmpassword.length < 5) {
		errors.confirmpassword = 'Must be 5 characters or more'
	} else if (values.confirmpassword !== values.password) {
		errors.confirmpassword = 'Your passwords is not equal'
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

class FormRegistration extends React.Component {

  state = {
    redirectToNewPage: false
  }

  submit = () => {
    this.setState({ redirectToNewPage: true })
    
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    if (this.state.redirectToNewPage) {
      return (<Redirect to="/login/success" />);
    }
    return (
      <form className={style.form} onSubmit={handleSubmit(this.submit)}>
        <Field
          className={style.formInput}
          name="username"
          component={renderField}
          type="text"
          label="Create your username"
        />
        <Field
          className={style.formInput}
          name="email"
          component={renderField}
          type="email"
          label="Email"
        />
        <Field
          className={style.formInput}
          name="password"
          component={renderField}
          type="password"
          label="Password"
        />
        <Field
          className={style.formInput}
          name="confirmpassword"
          component={renderField}
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
