import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import history from '../../../history';


const ProtectedRoute = ({ component: Component, ...props }) => {

  if(!props.isLogin) {
    return (
      <Redirect to='/login' />
    )
  } else {
    return(<Component {...props}/>);
  }
  
}

const mapStateToProps = state => ({
  isLogin: state.isLogin.isLogin,
})
export default connect(mapStateToProps)(ProtectedRoute);