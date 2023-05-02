import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const store = configureStore({
  reducer: {
    greeting: rootReducer
  },
  middleware: [thunk]
});

export default store;