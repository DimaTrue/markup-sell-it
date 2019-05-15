import Profile from '../components/Profile/Profile';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LogProps from '../components/CommonComponents/Hoc/LogProps';


const mapStateToProps = state => ({
  userData: state.user.user && state.user.user.data,
});

export default compose(connect(mapStateToProps))(LogProps(Profile));