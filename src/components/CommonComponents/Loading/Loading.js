import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import style from './Loading.module.scss';


const Loading = () => (
  <>
  <Header />
  <div className={style.cont}>
    <h1 className={style.heading}> Loading. . . </h1>
    <div className={style.loader}></div>
  </div>
  <Footer />
  </>
);

export default Loading;