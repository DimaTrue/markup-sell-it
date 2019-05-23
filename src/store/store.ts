import { applyMiddleware, createStore, Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from 'redux-saga'
import history from '../history';

import { logger } from '../middlewares/logger'
import reducer from "../reducers"
import rootSaga from '../sagas/root-saga';
import httpService from '../api-client/interceptors';
import { ProductsState } from './products/types';


export interface ApplicationState {
  products: ProductsState,
  user: any,
  form: any,
}

const sagaMiddleware = createSagaMiddleware();

  export const store: Store<ApplicationState> = createStore(reducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));

sagaMiddleware.run(rootSaga);
httpService.setupInterceptors(store, history);