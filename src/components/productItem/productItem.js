import React from 'react';

const ProductItem = ({ img, eye }) => (
  <div className="list-item">
    <div className="item-img">
      <img src={img} alt="img" />
    </div>
    <div className="item-panel">
      <span className="panel__title">Product title</span>
      <span className="panel__icon"><img src={eye} alt="eye" /></span>
    </div>
  </div>
);

export default ProductItem;