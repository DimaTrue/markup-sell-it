import FormSignIn from '../components/LoginPage/FormSignIn/FormSignIn';
import { connect } from 'react-redux';
import { logIn } from '../actions/authorization';
import { FETCH_USER } from '../action-types/authorization'

const mapStateToProps = state => ({
  isLogin: state.isLogin
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(logIn()),
  fetchUser: () => dispatch({type: FETCH_USER})
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn);