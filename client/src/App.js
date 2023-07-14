import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  User from './components/User';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={User} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
