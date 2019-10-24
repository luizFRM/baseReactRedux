import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./ducks";
import rootSaga from "./sagas";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const storeMiddlewares = process.env.NODE_ENV !== 'production' ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer()) : applyMiddleware(...middlewares);

const store = createStore(
  rootReducer,
  storeMiddlewares
);

sagaMiddleware.run(rootSaga);

export default store;