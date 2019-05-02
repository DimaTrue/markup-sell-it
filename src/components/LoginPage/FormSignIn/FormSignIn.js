import React from 'react';
import style from './FormSignIn.module.scss';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';


class FormSignIn extends React.Component {

  login = (e) => {
    e.preventDefault();
    this.props.login()
  };

  render() {
    const { login } = this.props;
    return (
      // <form className={style.form}>
      //   <input className={style.formInput} type="email" placeholder="Email" autoComplete="on" />
      //   <input className={style.formInput} type="password" placeholder="Password" autoComplete="on" />
      //   <button className={style.formButton} type="button"> <Link to='/' className={style.link} onClick={login}>Login</Link></button>
      // </form>
      <div>
        <div>
          <label htmlFor="firstName"> First Name </ label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName"> Last Name </ label>
          <Field name="lastName" component="input" type="text" />
        </ div>
        <div>
          <label htmlFor="email"> Email </ label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit"> Submit </ button>
      </div>
    );
  }
}

FormSignIn = reduxForm({
  form: 'uniqname',
})(FormSignIn)

export default FormSignIn;
