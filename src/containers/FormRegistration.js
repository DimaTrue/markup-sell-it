import { connect } from 'react-redux';

import FormRegistration from '../components/LoginPage/FormRegistration/FormRegistration';

import { SIGN_UP } from '../action-types/user';

const mapStateToProps = state => ({
  isLogin: state.isLogin,
  params: state.form.registration ? state.form.registration.values : null,
});

const mapDispatchToProps = dispatch => ({
  signUp: (params) => dispatch({ type: SIGN_UP, payload: params }),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormRegistration);