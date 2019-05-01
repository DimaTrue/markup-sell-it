import React from 'react';
import user from '../../../img/user.jpg';
import icon from '../../../img/icon.png';
import style from './UserMenu.module.scss';
import { Link } from 'react-router-dom';

class UserMenu extends React.Component {

  logout = () => {
    this.props.logout();
  };

  render() {
    const { isLogin } = this.props;
    if (isLogin.isLogin === false) {
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
            <div className={style.logout} title="Log Out" onClick={this.logout}><img src={icon} alt="icon" /></div>
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
}

export default UserMenu;
