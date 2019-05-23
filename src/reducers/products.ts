import { Reducer } from 'redux';
import { ProductsActionTypes } from '../store/products/types';
import { ProductsState } from '../store/products/types';

const initialState: ProductsState = {
  isLoading: true,
  data: [],
  error: null,
  isLoadingItem: true,
  productItem: {},
  errorItem: null,
  isLoadingOwnProducts: true,
  ownProducts: [],
  errorOwnProducts: null,
  filterSymbol: '',
}

const reducer: Reducer<ProductsState> = (state = initialState, action) => {
  switch (action.type) {

    case ProductsActionTypes.FETCH_PRODUCTS:
      return { ...state, isLoading: true, };

    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, data: action.payload.data, isLoading: false, error: null, };

    case ProductsActionTypes.FETCH_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error, };

    case ProductsActionTypes.FETCH_PRODUCT_ITEM:
      return { ...state, isLoadingItem: true, };

    case ProductsActionTypes.FETCH_PRODUCT_ITEM_SUCCESS:
      return { ...state, productItem: action.payload, isLoadingItem: false, errorItem: null, };

    case ProductsActionTypes.FETCH_PRODUCT_ITEM_FAILURE:
      return { ...state, isLoadingItem: false, errorItem: action.payload, };

    case ProductsActionTypes.SEARCH_PRODUCTS:
      return { ...state, isLoading: true, filterSymbol: action.payload };

    case ProductsActionTypes.SEARCH_PRODUCTS_SUCCESS:
      return { ...state, data: action.payload, isLoading: false, error: null, };

    case ProductsActionTypes.SEARCH_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload, };

    case ProductsActionTypes.PRODUCT_ADD:
      return { ...state, };

    case ProductsActionTypes.PRODUCT_ADD_SUCCESS:
      return { ...state, data: action.payload, };

    case ProductsActionTypes.PRODUCT_ADD_ERROR:
      return { ...state, error: action.payload, };

    case ProductsActionTypes.FETCH_OWN_PRODUCTS:
      return { ...state, isLoadingOwnProducts: true, };

    case ProductsActionTypes.FETCH_OWN_PRODUCTS_SUCCESS:
      return { ...state, ownProducts: action.payload, isLoadingOwnProducts: false, errorOwnProducts: null, };

    case ProductsActionTypes.FETCH_OWN_PRODUCTS_FAILURE:
      return { ...state, isLoadingOwnProducts: false, errorOwnProducts: action.payload, };

    case ProductsActionTypes.DELETE_PRODUCT_ITEM:
      return { ...state, };

    case ProductsActionTypes.DELETE_PRODUCT_ITEM_SUCCESS:
      return { ...state, };

    case ProductsActionTypes.DELETE_PRODUCT_ITEM_FAILURE:
      return { ...state, error: action.payload, };

    default:
      return state;
  }
}

export default reducer;