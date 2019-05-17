import React from 'react';
import { Link } from "react-router-dom";

import style from './WrongPath.module.scss';


const WrongPath = () => {
  return (
    <div className={style.wrap}>
      <h1>Error Page</h1>
      <section className={style.errorContainer}>
        <span>4</span>
        <span><span className={style.screenReaderText}>0</span></span>
        <span>4</span>
      </section>
      <div className={style.linkContainer}>
        <Link to="/" className={style.moreLink}>Return to main page</Link>
      </div>
    </div>
  );
}

export default WrongPath;