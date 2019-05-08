import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_ITEM,
  FETCH_PRODUCT_ITEM_SUCCESS,
  FETCH_PRODUCT_ITEM_FAILURE,
  SEARCH_PRODUCTS,
} from '../action-types/products';


const initialState = {
  isLoading: true,
  data: [],
  error: null,
  filterSymbol: '',
  isLoadingItem: true,
  productItem: {},
  errorItem: null,
}

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_PRODUCTS:
      return { ...state, isLoading: true, };

    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, data: action.payload, isLoading: false, error: null, };

    case FETCH_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload, };

    case FETCH_PRODUCT_ITEM:
      return { ...state, isLoadingItem: true, };

    case FETCH_PRODUCT_ITEM_SUCCESS:
      return { ...state, productItem: action.payload, isLoadingItem: false, error: null, };

    case FETCH_PRODUCT_ITEM_FAILURE:
      return { ...state, isLoadingItem: false, errorItem: action.payload, };

    case SEARCH_PRODUCTS:
      return { ...state, filterSymbol: action.payload, }

    default:
      return state;
  }
}