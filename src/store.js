import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reduxThunk from "redux-thunk"
import { logger } from './middlewares//logger'
import reducer from "./reducers"
import rootSaga from './sagas/products';

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxThunk, logger, sagaMiddleware)));

//sagaMiddleware.run(rootSaga);