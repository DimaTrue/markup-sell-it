import React from 'react';
import { Link } from 'react-router-dom';

const FormSignIn = () => (
  <form action="/productlist" className="form">
    <input type="email" placeholder="Email" autoComplete="on" />
    <input type="password" placeholder="Password" autoComplete="on" />
    <button className="form__btn"><Link to='/productlist'>Login</Link></button>
  </form>
);

export default FormSignIn;
