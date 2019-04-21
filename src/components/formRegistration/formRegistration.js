import React from 'react';

class FormRegistration extends React.Component {
  render() {
    return (
      <form action="#"  className="form">
        <input type="text" placeholder="Create your login" autoComplete="on" />
        <input type="email" placeholder="Email" autoComplete="on" />
        <input type="password" placeholder="Password" autoComplete="on" />
        <input type="password" placeholder="Repeat the Password" autoComplete="on" />
        <button className="button form__btn">Registration</button>
      </form>
    );
  }
}

export default FormRegistration;
