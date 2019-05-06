import React from 'react';
import user from '../../img/user.jpg';
import style from './Profile.module.scss';
import Header from '../CommonComponents/Header/Header';
import Footer from '../CommonComponents/Footer/Footer';

class Profile extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<div className={style.section}>
					<div className={style.container}>
						<img className={style.pic} src={user} alt="user" />
					</div>
				</div>
				<Footer />
			</div>

		);
	}
}

export default Profile;
