import { connect } from 'react-redux';

import UserMenu from '../components/CommonComponents/UserMenu/UserMenu';

import { logOut } from '../actions/user';
import { FETCH_USER } from '../action-types/user';


const mapStateToProps = state => ({
  userData: state.user.user && state.user.user.data,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut()),
  fetchUser: () => dispatch({ type: FETCH_USER }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);