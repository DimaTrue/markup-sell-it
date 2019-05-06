import React from 'react';
import user from '../../img/user.jpg';
import style from './Profile.module.scss';
import Header from '../CommonComponents/Header/Header';
import Footer from '../CommonComponents/Footer/Footer';
//import AddProductForm from '../CommonComponents/AddProductForm/AddProductForm'

class Profile extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<div className={style.section}>
					<div className={style.container}>
						<img className={style.pic} src={user} alt="user" />
					</div>
					{/* <AddProductForm /> */}
				</div>
				<Footer />
			</div>

		);
	}
}

export default Profile;
