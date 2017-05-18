import React from 'react';
import { render } from 'react-dom';
import Header from './js/Header';
import VerticalNavbar from './js/VerticalNavbar';
import AppContainer from './js/AppContainer';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const App = () => (
  <div>
    <VerticalNavbar />
    <Header />
    <AppContainer />
  </div>
);

render(<App />, document.getElementById('root'));
