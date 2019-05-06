import React from 'react';
import style from './ProductItem.module.scss';
import { Link } from 'react-router-dom';
import eye from '../../../img/eye.png';
import item from '../../../img/item.jpg';
import Proptypes from 'prop-types';

const DEFAULT_PIC = item;

const ProductItem = ({ img, id, title }) => (

  <Link className={style.link} to={`/product/${id}`}>
    <div className={style.list}>
      <div>
        <img src={(!img ? DEFAULT_PIC : img.file)} alt="img" className={style.pic} />
      </div>
      <div className={style.panel}>
        <span className={style.title}>{!title? 'New Product': title}</span>
        <span className={style.icon}><img src={eye} alt="eye" /></span>
      </div>
    </div>
  </Link>
);

ProductItem.propTypes = {
  img: Proptypes.object,
  id: Proptypes.number,
  title: Proptypes.string,
};

export default ProductItem;