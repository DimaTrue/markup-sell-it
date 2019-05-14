import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from 'redux-saga'
import history from './history';

import { logger } from './middlewares/logger'
import reducer from "./reducers"
import rootSaga from './sagas/root-saga';
import httpService from './api-client/interceptors';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));

sagaMiddleware.run(rootSaga);
httpService.setupInterceptors(store, history);