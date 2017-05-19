import React from 'react';
import { render } from 'react-dom';

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

import Header from './js/Header/Header';
import VerticalNavbar from './js/VerticalNavbar/VerticalNavbar';
import AppContainer from './js/AppContainer';

const App = () => (
  <div>
    <VerticalNavbar />
    <Header />
    <AppContainer />
  </div>
);

render(<App />, document.getElementById('root'));
