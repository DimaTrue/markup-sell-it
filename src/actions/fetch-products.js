// import {
//   FETCH_PRODUCTS,
//   FETCH_PRODUCTS_SUCCESS,
//   FETCH_PRODUCTS_FAILURE,
//   FETCH_PRODUCT_ITEM,
//   FETCH_PRODUCT_ITEM_SUCCESS,
//   FETCH_PRODUCT_ITEM_FAILURE,
// } from '../action-types/fetch-products';

// import axios from 'axios';

// export const fetchProducts = () =>
//   dispatch => {
//     dispatch({ type: FETCH_PRODUCTS });
//     axios.get(`http://light-it-04.tk/api/posterssss/`)
//       .then(res => dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data.data, meta: { printLog: true } }))
//       .catch(error => dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error }))
//   }
   
// itemIndex is a value of this.props.match.params.id of current product

// export const fetchProductItem = (itemIndex) =>
//   dispatch => {
//     dispatch({ type: FETCH_PRODUCT_ITEM });
//     axios.get(`http://light-it-04.tk/api/posters/${itemIndex}`)
//       .then(res => dispatch({ type: FETCH_PRODUCT_ITEM_SUCCESS, payload: res.data }))
//       .catch(error => dispatch({ type: FETCH_PRODUCT_ITEM_FAILURE, payload: error }))
//   }