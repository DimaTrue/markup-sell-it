import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { logger } from './middlewares//logger'
import reducer from "./reducers"
import rootSaga from './sagas/products';
import rootSagaUser from './sagas/user';

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware )));

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(rootSagaUser);