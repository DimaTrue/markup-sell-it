import { connect } from 'react-rudux';

import FormRegistration from '../components/LoginPage/FormRegistration/FormRegistration';


const mapStateToProps = state => ({
  isLogin: state.isLogin
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(FormRegistration);