import React from 'react';

import { AppContext } from '../../../App';
import errorPic from '../../../img/error.gif';

import style from './HomeTaskErrorBoundary.module.scss';


class HomeTaskErrorBoundary extends React.Component {

  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    const { error, errorInfo } = this.state;
    if (errorInfo !== null) {
      return (
        <div className={style.errorPage}>
          <h1 className={style.heading}>Oops! Something went wrong!!!</h1>
          <img className={style.pic} src={errorPic} alt="error" />
          <details className={style.details} >
            {error && error.toString()}
            <br />
            {errorInfo.stackComponent}
          </details>
          <AppContext.Consumer>
            {({ cancelError }) => (
              <>
                <button type="button" onClick={cancelError} className={style.btn} >Cancel Error</button>
              </>
            )
            }
          </AppContext.Consumer>
        </div>
      );
    }
    return this.props.children;
  }
}

export default HomeTaskErrorBoundary;