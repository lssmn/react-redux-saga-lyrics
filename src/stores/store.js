import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(...middleware)
      , window.devToolsExtension ? window.devToolsExtension() : f => f 
    )
  );
  sagaMiddleware.run(sagas);
  return store;
}

export default configureStore;
