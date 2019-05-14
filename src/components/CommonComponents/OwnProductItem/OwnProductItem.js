import React from 'react';
import item from '../../../img/item.jpg';
import { Link } from 'react-router-dom';

import style from './OwnProductItem.module.scss';

class OwnProductItem extends React.Component {

  remove = () => {
    this.props.deleteProductItem(this.props.id);
  }

  render() {
    const { img, title, id } = this.props;
    return (
      <div className={style.product}>
        <Link to={`/product/${id}`}>
          <div className={style.title}>{title}</div>
          <img className={style.pic} src={img || item} alt='own product' />
        </Link>
        <div>
          <button className={style.del} type='button' onClick={this.remove}>Delete</button>
        </div>
      </div>
    )
  }
}

export default OwnProductItem;