import React from 'react';
import { AppContext } from '../../../App';

import style from './HomeTaskComponentChild.module.scss';

const HomeTaskComponentChild = () => {
  return (
    <AppContext.Consumer>
      {({ string, number, test, throwError }) => {
        if (test) {
          throw new Error('Simulate an error');
        }
        return (
          <>
            <h2>String is {string}</h2>
            <h2>Number is {number}</h2>
            <button className={style.btn} type="button" onClick={throwError}>Throw Error</button>
          </>
        );
      }}
    </AppContext.Consumer>
  );
}

export default HomeTaskComponentChild;