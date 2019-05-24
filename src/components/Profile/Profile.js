import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from '../CommonComponents/Header/Header';
import Footer from '../CommonComponents/Footer/Footer';
import Loading from '../CommonComponents/Loading/Loading';
import OwnProductList from '../../containers/OwnProductList';

import userPic from '../../img/defaultAvatar.jpg';

import style from './Profile.module.scss';


const Profile = (props) => {
	const { userData } = props
	if (!userData) {
		return (
			<Fragment>
				<Header />
				<Loading />
				<Footer />
			</Fragment>
		)
	} else {
		return (
			<div>
				<Header />
				<div className={style.section}>
					<div className={style.container}>
						<div className={style.wrap}>
							<div className={style.polaroid}>
								<p><strong>{userData.username || 'unknown'}</strong></p>
								<img className={style.pic} src={userPic} alt="user" />
							</div>
							<div className={style.info}>
								<div className={style.box}><i>Email: </i> <strong>{userData.email || 'unknown'}</strong></div>
								<div className={style.box}><i>First name:  </i> <strong>{userData.first_name || 'unknown'}</strong></div>
								<div className={style.box}><i>Last name: </i> <strong>{userData.last_name || 'unknown'}</strong></div>
								<div className={style.box}><i>Location: </i> <strong>{userData.location || 'unknown'}</strong></div>
								<div className={style.box}><i>Color scheme: </i> <strong>{userData.color_scheme || 'unknown'}</strong></div>
								<div className={style.box}><i>Language: </i> <strong>{userData.language || 'unknown'}</strong></div>
							</div>
						</div>
						<h3>Own products: </h3>
						<OwnProductList />
						<div className={style.lowerLink}>
							<Link className={style.link} to='/' >Return to Product List</Link>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Profile;
