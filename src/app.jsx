import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

import AppContainer from './js/AppContainer';

const App = () => (
  <Router>
    <AppContainer />
  </Router>
);

render(<App />, document.getElementById('root'));
