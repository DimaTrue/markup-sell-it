import React from 'react';
import style from './FormSignIn.module.scss';
import { Link } from 'react-router-dom';

const FormSignIn = (props) => (
  <form className={style.form}>
    <input className={style.formInput} type="email" placeholder="Email" autoComplete="on" />
    <input className={style.formInput} type="password" placeholder="Password" autoComplete="on" />
    <button className={style.formButton}><Link to='/' className={style.link} onClick={e => { props.login(); }}>Login</Link></button>
  </form>
);

export default FormSignIn;
