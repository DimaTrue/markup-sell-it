import React from 'react';


const LogWrapper = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      console.log("props is ---->", this.props)
      return <WrappedComponent {...this.props} />;
    }
  }
}

const LogProps = (WrappedComponent) => LogWrapper(WrappedComponent);
export default LogProps;