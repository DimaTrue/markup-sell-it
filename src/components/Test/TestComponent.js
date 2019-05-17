import React from 'react';

class TestComponent extends React.Component {

  state = {
    test: false,
  };


  handleClick = () => this.setState({ test: true })

  componentWillReceiveProps(nextProps) {
    this.setState({
      nextProps,
    });
    alert(this.state.test)
    this.forceUpdate();
  }

  render() {
    // Simulate an error
    const { test } = this.state;
    if (test) {
      throw new Error('Simulate an error');
    } else {
      return (
        <div>
          <h2>TestComponent!</h2>
          <button type='button' onClick={this.handleClick}>Trow new Error</button>
        </div>
      );
    }
  }
}

export default TestComponent;