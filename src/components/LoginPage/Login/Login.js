import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";

import FormRegistration from '../../../containers/FormRegistration';
import RegistrationSuccess from '../RegistrationSuccess/RegistrationSuccess';
import FormSignIn from '../../../containers/FormSignIn';

import bg from '../../../img/bg.jpg';
import logo from '../../../img/lightLogo.png';

import style from './Login.module.scss';


const Login = () => {

  return (
    <div className={style.main}>
      <div className={style.bg}>
        <img className={style.picture} src={bg} alt="bg" />
      </div>
      <div className={style.loginPage}>
        <div className={style.logoBlock}>
          <Link to="/" title="Go to Product list"><img src={logo} alt="sell it" /></Link>
        </div>
        <div className={style.btn}>
          <NavLink to="/login/signin" className={style.button} activeClassName={style.active}>Sign In</NavLink>
          <NavLink to="/login/signup" className={style.button} activeClassName={style.active}>Sign Up</NavLink>
        </div>
        <Switch>
          <Route path='/login/signin' component={FormSignIn} />
          <Route path='/login/signup' component={FormRegistration} />
          <Route path='/login/success' component={RegistrationSuccess} />
        </Switch>
        <Link to="/test" title="Go to Test Page">TEST PAGE FOR HOME TASKS</Link>
        <div className={style.copy}>Frontend labs 2017</div>
      </div>
    </div>
  );
}

export default Login;