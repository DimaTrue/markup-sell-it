import React from 'react';
import { connect } from 'react-redux';

import FormSignIn from '../components/LoginPage/FormSignIn/FormSignIn';

import { LOG_IN } from '../action-types/user'


class SignIn extends React.Component {
  login = async () => {
    const { signIn, params } = this.props;
    signIn(params.values);
  };

  componentDidMount() {
    if (this.props.isLogin) {
      this.props.history.push('/');
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isLogin) {
      this.props.history.push('/');
    }
  }

  render() {
    return (<FormSignIn onSubmit={this.login} />);
  }
}

const mapStateToProps = state => ({
  response: state.user,
  params: state.form.authorization,
  isLogin: state.user.isLogin,
});

const mapDispatchToProps = dispatch => ({
  signIn: (params) => dispatch({ type: LOG_IN, payload: params }),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);