import React, { Component } from 'react';
import { Link, HashRouter as Router, Route } from 'react-router-dom';

import Menu from './menu';
import Landing from './landing';
import Employee from './employee';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Link to="/" className="logo">
              <img src='public/img/logo.svg' alt="logo" />
            </Link>
          </header>
          <Route exact path="/" component={Landing} />
          <Route path="/menus/:id" component={Menu} />
          <Route path="/employees/:id" component={Employee} />
        </div>
      </Router>
    );
  }
}

export default App;
