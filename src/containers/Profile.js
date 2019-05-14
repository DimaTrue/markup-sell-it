import Profile from '../components/Profile/Profile';
import { connect } from 'react-redux';

import { FETCH_USER } from '../action-types/user';

const mapStateToProps = state => ({
  userData: state.user.user && state.user.user.data,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch({ type: FETCH_USER })
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);