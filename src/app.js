import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import initHandlebarsHelpers from '../lib/handlebars-template-helpers';

import Home from './components/home';
import './app.css';

initHandlebarsHelpers();

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
