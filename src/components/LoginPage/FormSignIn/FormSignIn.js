import React from 'react';
import style from './FormSignIn.module.scss';
import { Link } from 'react-router-dom';


class FormSignIn extends React.Component {

  login = (e) => {
    e.preventDefault();
    this.props.login()
  };

  render() {
    const { login } = this.props;
    return (
      <form className={style.form}>
        <input className={style.formInput} type="email" placeholder="Email" autoComplete="on" />
        <input className={style.formInput} type="password" placeholder="Password" autoComplete="on" />
        <button className={style.formButton} type="button"> <Link to='/' className={style.link} onClick={login}>Login</Link></button>
      </form>
    );
  }
}

export default FormSignIn;
