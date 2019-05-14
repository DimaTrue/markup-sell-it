import { connect } from 'react-redux';

import FormSignIn from '../components/LoginPage/FormSignIn/FormSignIn';

import { LOG_IN } from '../action-types/user'


const mapStateToProps = state => ({
  response: state.user,
  params: state.form.authorization,
  isLogin: state.user.isLogin,
});

const mapDispatchToProps = dispatch => ({
  signIn: (params) => dispatch({ type: LOG_IN, payload: params }),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn);