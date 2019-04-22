import React from 'react';
import { Link } from 'react-router-dom';

class FormRegistration extends React.Component {
  render() {
    return (
      <form action="/productlist"  className="form">
        <input type="text" placeholder="Create your login" autoComplete="on" />
        <input type="email" placeholder="Email" autoComplete="on" />
        <input type="password" placeholder="Password" autoComplete="on" />
        <input type="password" placeholder="Repeat the Password" autoComplete="on" />
        <button className="form__btn"><Link to='/productlist'>Registration</Link></button>
      </form>
    );
  }
}

export default FormRegistration;
