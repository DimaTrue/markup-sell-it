import React from 'react';


const LogProps = (WrappedComponent) => {
  return class LogProps extends React.Component {
    render() {
      console.log("props is ---->", this.props)
      return <WrappedComponent {...this.props} />;
    }
  }
}


export default LogProps;