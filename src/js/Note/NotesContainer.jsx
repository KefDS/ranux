import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

const NotesContainer = ({ notes, title, handlerSelectNote }) => (
  <section className='col-md-6 col-xm-12 col-md-offset-1 notes'>
    <h2>{title}</h2>
    <div className='notes-container'>
      {notes.map(note => <Note { ...note } handlerSelectNote={ handlerSelectNote } />)}
    </div>
  </section>
);

NotesContainer.propTypes = {
  title: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      color: PropTypes.string,
    }).isRequired,
  ),
  handlerSelectNote: PropTypes.func.isRequired,
};

NotesContainer.defaultProps = {
  notes: [],
};

export default NotesContainer;
