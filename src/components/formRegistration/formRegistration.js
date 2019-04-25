import React from 'react';
import { Link } from 'react-router-dom';

const FormRegistration = () => (
  <form action="/" className="form">
    <input type="text" placeholder="Create your login" autoComplete="on" />
    <input type="email" placeholder="Email" autoComplete="on" />
    <input type="password" placeholder="Password" autoComplete="on" />
    <input type="password" placeholder="Repeat the Password" autoComplete="on" />
    <button className="form__btn"><Link to='/'>Registration</Link></button>
  </form>
);


export default FormRegistration;
