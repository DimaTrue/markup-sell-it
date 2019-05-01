import UserMenu from '../components/CommonComponents/UserMenu/UserMenu';
import { connect } from 'react-redux';
import { logOut } from '../actions/isLogin';

const mapStateToProps = state => ({
  isLogin: state.isLogin
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);