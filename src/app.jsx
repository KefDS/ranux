import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

import Header from './js/Header/Header';
import VerticalNavbar from './js/VerticalNavbar/VerticalNavbar';
import AppContainer from './js/AppContainer';

const App = () => (
  <Router>
    <div>
      <Route path='*' component={ VerticalNavbar } />
      <Header />
      <Route path='/' component={ AppContainer } />
    </div>
  </Router>
      );

render(<App />, document.getElementById('root'));
