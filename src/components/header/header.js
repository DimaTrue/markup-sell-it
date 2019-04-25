import React from 'react';
import logo from '../../img/logo.png';
import user from '../../img/user.jpg';
import icon from '../../img/icon.png';
import { Link } from 'react-router-dom';
import Search from '../search/search';

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="wrapper">
        <div className="logo">
          <Link to='/login'><img className="logo__img" src={logo} alt="logo" /></Link>
        </div>
        <Search />
        <div className="user-menu">
          <div className="user-menu_not_authorizated">
            Welcome, <Link to="/login" className="link">login</Link> or <Link to="/" className="link">register</Link> for
            start !
              </div>
          <div className="user-menu_authorizated">
            <div className="user-menu_authorizated_inner">
              <div className="user">
                <img className="user__avatar" src={user} alt="user" />
                <span className="user__name">Kim Evans</span>
              </div>
              <Link className="user__logout" to='/login'><img src={icon} alt="icon" /></Link>
            </div>
            <div className="submenu">
              <span className="submenu__text"><Link className="submenu__link" to="/login">Add new post</Link></span>
              <span className="submenu__profile"><Link className="submenu__link" to="/login">Profile</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default Header;