import React from 'react';
import { render } from 'react-dom';
import Header from './js/Header';
import NotesBlock from './js/NotesBlock';
import VerticalNavbar from './js/VerticalNavbar';
import NoteViewer from './js/Note/NoteViewer';

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const App = () => (
  <div>
    <VerticalNavbar />
    <Header />
    <div className='container'>
      <div className='row'>
        <NoteViewer />
        <NotesBlock title='Example' />
      </div>
    </div>
  </div>
);

render(<App />, document.getElementById('root'));
