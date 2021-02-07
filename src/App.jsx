import React from 'react';
import { Router, Route } from 'react-router';
import Home from './application/Home.jsx'
import Index from './application/Index.jsx'
import { createHashHistory } from 'history';
import AnimatedSwitch from './utils/AnimatedSwitch'
const hashHistory = createHashHistory();
function App() {
  return (
    <Router history={hashHistory}>
      <AnimatedSwitch>
        <Route path="/home" component={Home} />
        <Route path="/index" component={Index} />
      </AnimatedSwitch>

    </Router>
  )
}

export default App;