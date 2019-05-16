import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../CommonComponents/Header/Header';
import Footer from '../CommonComponents/Footer/Footer';

import item from '../../img/item.jpg';

import style from './ProductItemPage.module.scss';


const ProductItemPage = (props) => {
  const { productItem } = props;
  return (
    <div>
      <Header />
      <div className={style.section}>
        <div className={style.container}>
          <div className={style.product}>
            <div>
              <img className={style.pic} src={productItem.images.length ? productItem.images[0].file : item} alt="product" />
            </div>
            <div className={style.description}>
              <h2 className={style.title}>{productItem.theme || `Unknown`}</h2>
              <div>
                <strong>from</strong> <span className={style.userName} >{productItem.owner.username}</span> <span className={style.price}>Price: {productItem.price}$</span>
              </div>
              <p className={style.text}>{productItem.text || `Some description text from WYSIWYG editer`}</p>
              <div>
                Can be <strong>BOLD</strong> <i>italic</i>
              </div>
              <div className={style.listBox}>
                <h4 className={style.subtitle}>Can have list:</h4>
                <ul className={style.list}>
                  <li>- first</li>
                  <li>- second</li>
                </ul>
              </div>
              <p><strong>And anything from WYSIWYG editor</strong></p>
              <p className={style.someLine}><strong>Some line</strong></p>
              <p className={style.someLine}>Some line</p>
              <p className={style.someLine}><i>Some line</i></p>
              <p><strong>Finished on this line.</strong></p>
            </div>
          </div>
          <div className={style.lowerLink}>
            <Link className={style.link} to='/' >Return to Product List</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


ProductItemPage.propTypes = {
  productItem: PropTypes.object,
  isLoadingItem: PropTypes.bool,
  errorItem: PropTypes.object,
}

export default ProductItemPage;

