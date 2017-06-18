import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './infra/routes/index';
import configStore from './redux/store/index';
import { Provider } from 'react-redux';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { loadCourses } from './redux/actions/course.actions';

const store = configStore();
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById("app")
);
