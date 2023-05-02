import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from '../reducers/index';

const store = configureStore(
  greetingReducer,
  applyMiddleware(thunk)
);

export default store;