import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';

import Home from './components/Home/Home';
import ItemDetail from './components/Items/ItemDetail/ItemDetail';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:id" children={<ItemDetail />}>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  };
};