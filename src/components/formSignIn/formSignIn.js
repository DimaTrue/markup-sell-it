import React from 'react';
import { Link } from 'react-router-dom';

class FormSignIn extends React.Component {
  render() {
    return (
      <form className="form-block">
        <input type="email" placeholder="Email" autoComplete="on" />
        <input type="password" placeholder="Password" autoComplete="on" />
        <button className="button form-block__btn"><Link to='/productlist'>Login</Link></button>
      </form>
    );
  }
}

export default FormSignIn;
