import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Welcome from './Welcome';
import * as ReactDOM from 'react-dom';

const App = () => {
  return (
    <Router>
      <Welcome />
    </Router>
  )
}

export default App