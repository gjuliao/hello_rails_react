import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import greetingReducer from '../reducers/index';

const store = configureStore({
  reducer: {
    greeting: greetingReducer
  },
  middleware: [thunk]
});

export default store;