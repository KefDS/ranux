import React from 'react';
import PropTypes from 'prop-types';
import NotesContainer from './NotesContainer';

const NotesBlock = ({ title, notes }) => (
  <section className='col-md-6 col-xm-12 col-md-offset-1 notes' >
    <h2>{title}</h2>
    <NotesContainer notes={ notes } />
  </section>
);

NotesBlock.propTypes = {
  title: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    color: PropTypes.string,
  })),
};

NotesBlock.defaultProps = {
  title: 'Some notes',
  notes: [],
};

export default NotesBlock;
