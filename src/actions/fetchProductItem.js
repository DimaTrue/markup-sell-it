import { FETCH_PRODUCT_ITEM } from '../actionTypes/fetchProductItem';

import axios from 'axios';

export const fetchProductItem = (n = 4) =>
  dispatch => {
    axios.get(`http://light-it-04.tk/api/posters/`, {
      params: {
        page: 1,
      }
    })
      .then(res => dispatch({ type: FETCH_PRODUCT_ITEM, payload: res.data.data[n] }))
      .catch(error => console.log(error))
    }