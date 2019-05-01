import { FETCH_PRODUCTS } from '../actionTypes/fetchProducts';

import axios from 'axios';

export const fetchProducts = () =>
    dispatch => {
        axios.get(`http://light-it-04.tk/api/posters/`, {
            params: {
                page: 1,
            }
        })
            .then(res => dispatch({ type: FETCH_PRODUCTS, payload: res.data.data }))
            .catch(error => console.log(error))
    }