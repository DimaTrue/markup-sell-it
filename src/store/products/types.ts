export enum ProductsActionTypes {
  FETCH_PRODUCTS = "@@products/FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "@@products/FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAILURE = "@@products/FETCH_PRODUCTS_FAILURE",
  FETCH_PRODUCT_ITEM = "@@products/FETCH_PRODUCT_ITEM",
  FETCH_PRODUCT_ITEM_SUCCESS = "@@products/FETCH_PRODUCT_ITEM_SUCCESS",
  FETCH_PRODUCT_ITEM_FAILURE = "@@products/FETCH_PRODUCT_ITEM_FAILURE",
  SEARCH_PRODUCTS = '@@products/SEARCH_PRODUCTS',
  SEARCH_PRODUCTS_SUCCESS = '@@products/SEARCH_PRODUCTS_SUCCESS',
  SEARCH_PRODUCTS_FAILURE = '@@products/SEARCH_PRODUCTS_FAILURE',
  PRODUCT_ADD = '@@products/PRODUCT_ADD',
  PRODUCT_ADD_SUCCESS = '@@products/PRODUCT_ADD_SUCCESS',
  PRODUCT_ADD_ERROR = '@@products/PRODUCT_ADD_ERROR',
  FETCH_OWN_PRODUCTS = "@@products/FETCH_OWN_PRODUCTS",
  FETCH_OWN_PRODUCTS_SUCCESS = "@@products/FETCH_OWN_PRODUCTS_SUCCESS",
  FETCH_OWN_PRODUCTS_FAILURE = "@@products/FETCH_OWN_PRODUCTS_FAILURE",
  DELETE_PRODUCT_ITEM = "@@products/DELETE_PRODUCT_ITEM",
  DELETE_PRODUCT_ITEM_SUCCESS = "@@products/DELETE_PRODUCT_ITEM_SUCCESS",
  DELETE_PRODUCT_ITEM_FAILURE = "@@products/DELETE_PRODUCT_ITEM_FAILURE",
}

export interface Images {
  readonly advert?: number;
  readonly file?: string;
  readonly pk?: number;
}

export interface Owner {
  readonly avatar?: string;
  readonly color_scheme?: string;
  readonly email: string;
  readonly first_name?: string;
  readonly id: number;
  readonly language?: string;
  readonly last_name?: string;
  readonly location?: any;
  readonly username: string; 
}

export interface Product {
  readonly activated_at?: string;
  readonly category?: string;
  readonly contract_price?: boolean;
  readonly currency?: number;
  readonly images?: Images[];
  readonly is_active?: boolean;
  readonly location?: number;
  readonly owner?: Owner;
  readonly pk?: number;
  readonly price?: number;
  readonly text?: string;
  readonly theme?: string;
}

export interface ProductsState {
  readonly isLoading: boolean;
  readonly data: Product[];
  readonly error: any;
  readonly isLoadingItem: boolean;
  readonly productItem?: Product;
  readonly errorItem: any;
  readonly isLoadingOwnProducts: boolean;
  readonly ownProducts: Product[];
  readonly errorOwnProducts: any;
  readonly filterSymbol: string;
}