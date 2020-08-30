import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// import { persistStore, persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import thunkMiddleware from 'redux-thunk'

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['safety'],
// };

const appReducer = {};

// const persistedReducer = persistCombineReducers(persistConfig, appReducer);

const configureStore = (initialState) => {
  // const middlewares = [thunkMiddleware];
  const middlewares = [];
  let enhancer = null;
  if (process.env.NODE_ENV === 'development') {
    enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  } else {
    enhancer = compose(applyMiddleware(...middlewares));
  }
  return createStore(appReducer, initialState, enhancer);
};

const store = configureStore({});
// const persistor = persistStore(store);
// Activate the following line to purge the store
// persistor.purge();
// export { store, persistor };
export default store;
