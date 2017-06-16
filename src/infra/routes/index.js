import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../../components/index';
import Home from '../../components/home/index';
import About from '../../components/about/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
);