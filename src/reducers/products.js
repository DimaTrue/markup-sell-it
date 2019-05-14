import * as products from '../action-types/products';


const initialState = {
  isLoading: true,
  data: [],
  error: null,
  isLoadingItem: true,
  productItem: {},
  errorItem: null,
  isLoadingOwnProducts: true,
  ownProducts: [],
  errorOwnProducts: null,
}

export default function (state = initialState, action) {
  switch (action.type) {

    case products.FETCH_PRODUCTS:
      return { ...state, isLoading: true, };

    case products.FETCH_PRODUCTS_SUCCESS:
      return { ...state, data: action.payload, isLoading: false, error: null, };

    case products.FETCH_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload, };

    case products.FETCH_PRODUCT_ITEM:
      return { ...state, isLoadingItem: true, };

    case products.FETCH_PRODUCT_ITEM_SUCCESS:
      return { ...state, productItem: action.payload, isLoadingItem: false, error: null, };

    case products.FETCH_PRODUCT_ITEM_FAILURE:
      return { ...state, isLoadingItem: false, errorItem: action.payload, };

    case products.SEARCH_PRODUCTS:
      return { ...state, isLoading: true, };

    case products.SEARCH_PRODUCTS_SUCCESS:
      return { ...state, data: action.payload, isLoading: false, error: null, };

    case products.SEARCH_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload, };

    case products.PRODUCT_ADD:
      return { ...state, };

    case products.PRODUCT_ADD_SUCCESS:
      return { ...state, data: action.payload, };

    case products.PRODUCT_ADD_ERROR:
      return { ...state, error: action.payload, };

    case products.FETCH_OWN_PRODUCTS:
      return { ...state, isLoadingOwnProducts: true, };

    case products.FETCH_OWN_PRODUCTS_SUCCESS:
      return { ...state, ownProducts: action.payload, isLoadingOwnProducts: false, errorOwnProducts: null, };

    case products.FETCH_OWN_PRODUCTS_FAILURE:
      return { ...state, isLoadingOwnProducts: false, errorOwnProducts: action.payload, };

    case products.DELETE_PRODUCT_ITEM:
      return { ...state, };

    case products.DELETE_PRODUCT_ITEM_SUCCESS:
      return { ...state, };

    case products.DELETE_PRODUCT_ITEM_FAILURE:
      return { ...state, error: action.payload, };

    default:
      return state;
  }
}