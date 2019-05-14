import React from 'react';
import OwnProductItem from '../../../containers/OwnProductItem';

import style from './OwnProductList.module.scss';

class OwnProductList extends React.Component {

  componentDidMount() {
    this.props.fetchOwnProducts();
  }

  render() {
    const { ownProducts } = this.props;
    return (
      <div className={style.OwnProducts}>
        {(ownProducts &&
          ownProducts.length &&
          ownProducts.map(({ images, theme, pk }, index) => <OwnProductItem key={index} img={images[0]} id={pk} title={theme} />)) ||
          `Sorry, You haven't own products yet.`}
      </div>
    );
  }
}

export default OwnProductList;