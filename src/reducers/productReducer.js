import { FETCH_PRODUCTS } from '../actionTypes/fetchProducts';

const initialState = {
  isLoading: true,
  data: []
}

export default function (state = initialState, action) {
  switch (action.type) {
      
      case FETCH_PRODUCTS:
      return {data: action.payload, isLoading: state.isLoading = false,}; 

      default:
      return state;
  }
}