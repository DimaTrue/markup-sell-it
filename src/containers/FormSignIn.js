import FormSignIn from '../components/LoginPage/FormSignIn/FormSignIn';
import { connect } from 'react-redux';
import { logIn } from '../actions/authorization';

const mapStateToProps = state => ({
  isLogin: state.isLogin
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(logIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn);