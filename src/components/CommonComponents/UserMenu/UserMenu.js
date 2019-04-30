import React from 'react';
import user from '../../../img/user.jpg';
import icon from '../../../img/icon.png';
import style from './UserMenu.module.scss';
import { Link } from 'react-router-dom';

const UserMenu = ({ logout, isAuthentificated }) => {
  if (!isAuthentificated) {
    return (<div className={style.userMenu}>
      <div className={style.notAuthorizated}>
        Welcome, <Link to="/login" className={style.link}>login</Link> or <Link to="/login" className={style.link}>register</Link> for
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
          <div className={style.logout} onClick={logout}><img src={icon} alt="icon" /></div>
        </div>
        <div className={style.submenu}>
          <span className={style.text}><Link className={style.submenuLink} to="/login">Add new post</Link></span>
          <span className={style.profile}><Link className={style.submenuLink} to="/login">Profile</Link></span>
        </div>
      </div>
    </div>
    );
  }
}

export default UserMenu;