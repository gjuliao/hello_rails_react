import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './Welcome';

const App = () => {
  return (
    <Router>
        <Welcome />
    </Router>
  )
}

export default App