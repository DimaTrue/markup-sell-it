import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import defUser from '../../../img/defaultAvatar.jpg';
import icon from '../../../img/icon.png';

import style from './UserMenu.module.scss';


const UserMenu = (props) => {
  const { userData, logout } = props;
  if (!userData) {
    return (
      <div className={style.userMenu}>
        <div className={style.notAuthorizated}>
          Welcome, <Link to="/login/signin" className={style.link}>login</Link> or <Link to="/login/signup" className={style.link}>register</Link> for
          start !
        </div>
      </div>);
  } else {
    return (
      <div className={style.userMenu}>
        <div className={style.authorizated}>
          <div className={style.inner}>
            <div className={style.user}>
              <img className={style.avatar} src={userData.avatar || defUser} alt="user" />
              <span className={style.name}>{userData.username}</span>
            </div>
            <div className={style.logout} title="Log Out" onClick={logout}><img src={icon} alt="icon" /></div>
          </div>
          <div className={style.submenu}>
            <span className={style.text}><Link className={style.submenuLink} to="/add_product">Add new post</Link></span>
            <span className={style.profile}><Link className={style.submenuLink} to="/profile" >Profile</Link></span>
          </div>
        </div>
      </div>
    );
  }
}

UserMenu.propTypes = {
  isLogin: PropTypes.objectOf(PropTypes.bool),
}

export default UserMenu;
