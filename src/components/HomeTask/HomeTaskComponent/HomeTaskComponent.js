import React from 'react';

import HomeTaskComponentChild from '../HomeTaskComponentChild/HomeTaskComponentChild';

import style from './HomeTaskComponent.module.scss';

const HomeTaskComponent = () => {
  return (
    <div className={style.wrap}>
      <h2>HomeTaskComponent!</h2>
      <HomeTaskComponentChild />
    </div>
  );
}

export default HomeTaskComponent;