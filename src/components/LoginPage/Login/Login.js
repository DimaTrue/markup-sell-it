import React from 'react';
import style from './Login.module.scss';
import bg from '../../../img/bg.jpg';
import logo from '../../../img/lightLogo.png';
//import FormSignIn from '../../../containers/FormSignIn';
import FormSignIn from '../../../containers/formSignIn';
import FormRegistration from '../FormRegistration/FormRegistration';
import { Link } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import RegistrationSuccess from '../RegistrationSuccess/RegistrationSuccess';

const Login = () => (
  <div className={style.main}>
    <div className={style.bg}>
      <img className={style.picture} src={bg} alt="bg" />
    </div>
    <div className={style.loginPage}>
      <div className={style.logoBlock}>
        <Link to="/" title="Go to Product list"><img src={logo} alt="sell it" /></Link>
      </div>
      <div className={style.btn}>
        <Link to="/login/signin" ><button className={style.button} >Sign In</button></Link>
        <Link to="/login/signup" > <button className={style.button} >Sign Up</button></Link>
      </div>
      <Switch>
        <Route path='/login/signin' component={FormSignIn} />
        <Route path='/login/signup' component={FormRegistration} />
        <Route path='/login/success' component={RegistrationSuccess} />
      </Switch>
      <div className={style.copy}>Frontend labs 2017</div>
    </div>
  </div>
);


export default Login;