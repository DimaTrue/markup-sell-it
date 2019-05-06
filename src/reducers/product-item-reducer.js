import { FETCH_PRODUCT_ITEM } from '../action-types/fetch-product-item';

const initialState = {
  isLoading: true,
  data: {}
}

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_PRODUCT_ITEM:
      return { data: action.payload, isLoading: false, };

    default:
      return state;
  }
}