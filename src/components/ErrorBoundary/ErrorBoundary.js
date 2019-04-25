import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        error: null,
        errorInfo: null
    }

    componentDidCatch (error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
          })
    }
    render() {
        if(this.state.hasError){
        return (
            <div>
            <h1>Error! Something went wrong!!!</h1>
            <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
          </div>
        );
        }
        return this.props.children;
    }
}