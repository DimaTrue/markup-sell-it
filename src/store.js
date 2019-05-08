import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from 'redux-saga'

import { logger } from './middlewares/logger'
import reducer from "./reducers"
import rootSaga from './sagas/root-saga';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));

sagaMiddleware.run(rootSaga);