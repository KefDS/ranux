import React from 'react';
import { render } from 'react-dom';
import Header from './js/Header';
import NotesBlock from './js/NotesBlock';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const App = () => (
  <div>
    <Header />
    <NotesBlock title='Example' />
  </div>
);

render(<App />, document.getElementById('root'));
