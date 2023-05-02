import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Welcome from './Welcome';
import { Provider } from 'react-redux';
import store from '../store/index';
import * as ReactDOM from 'react-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Welcome />
      </Router>
    </Provider>
  )
}

export default App