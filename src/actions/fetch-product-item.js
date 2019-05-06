import { FETCH_PRODUCT_ITEM } from '../action-types/fetch-product-item';

import axios from 'axios';

// itemIndex is a value of this.props.match.params.id of current product

export const fetchProductItem = (itemIndex) =>
  dispatch => {
    axios.get(`http://light-it-04.tk/api/posters/`, {
      params: {
        page: 1,
      }
    })
      .then(res => dispatch({ type: FETCH_PRODUCT_ITEM, payload: res.data.data[itemIndex] }))
      .catch(error => console.log(error))
    }