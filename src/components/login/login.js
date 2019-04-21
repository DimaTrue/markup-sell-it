import React from 'react';
import bg from '../../img/bg.jpg';
import logo from '../../img/lightLogo.png';
import FormSignIn from '../formSignIn/formSignIn';
import FormRegistration from '../formRegistration/formRegistration';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = {
    activeComponent: 1,
  }

  renderSignIn = () => this.setState({activeComponent: 1});

  renderRegistration = () => this.setState({activeComponent: 2});

  render() {
    return <div className="section-left">
    <div className="bg">
      <img className="bg__img" src={bg} alt="bg" />
    </div>
    <div className="login-page">
      <div className="logo-block">
        <Link className="logo-block__link" to="/"><img className="logo-block__img" src={logo} alt="sell it" /></Link>
      </div>
      <div className="btn">
        <button className="btn__button" onClick={this.renderSignIn}>Sign In</button>
        <button className="btn__button" onClick={this.renderRegistration}>Sign Up</button>
      </div>
      {this.state.activeComponent === 1 && <FormSignIn />}
      {this.state.activeComponent === 2 && <FormRegistration />}  
      <div className="copy">Frontend labs 2017</div>
    </div>
    </div>
  }
}

export default Login;