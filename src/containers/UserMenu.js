import { connect } from 'react-redux';

import UserMenu from '../components/CommonComponents/UserMenu/UserMenu';

import { logOut } from '../actions/authorization';


const mapStateToProps = state => ({
  isLogin: state.isLogin
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);