import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import user from '../../../img/user.jpg';
import icon from '../../../img/icon.png';

import style from './UserMenu.module.scss';


const UserMenu = ({ isLogin, logout }) => {

  if (isLogin.isLogin === false) {
    return (<div className={style.userMenu}>
      <div className={style.notAuthorizated}>
        Welcome, <Link to="/login/signin" className={style.link}>login</Link> or <Link to="/login/signup" className={style.link}>register</Link> for
        start !
              </div>
    </div>);
  } else {
    return (<div className={style.userMenu}>
      <div className={style.authorizated}>
        <div className={style.inner}>
          <div className={style.user}>
            <img className={style.avatar} src={user} alt="user" />
            <span className={style.name}>Kim Evans</span>
          </div>
          <div className={style.logout} title="Log Out" onClick={logout}><img src={icon} alt="icon" /></div>
        </div>
        <div className={style.submenu}>
          <span className={style.text}><Link className={style.submenuLink} to="/post">Add new post</Link></span>
          <span className={style.profile}><Link className={style.submenuLink} to="/profile" >Profile</Link></span>
        </div>
      </div>
    </div>
    );
  }
}

UserMenu.propTypes = {
  logout: PropTypes.func.isRequired,
  isLogin: PropTypes.objectOf(PropTypes.bool),
}

export default UserMenu;
