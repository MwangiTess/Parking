import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Register from './components/User';
import AdminPanel from './AdminPanel';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">Parking Application</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">Admin Panel</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container my-4">
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={AdminPanel} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
