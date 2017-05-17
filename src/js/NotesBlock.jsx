import React from 'react';
import PropTypes from 'prop-types';
import NotesContainer from './NotesContainer';

const NotesBlock = ({ title }) => (
  <section className='col-md-6 col-xm-12 col-md-offset-1 notes' >
    <h2>{title}</h2>
    <NotesContainer />
  </section>

);
NotesBlock.propTypes = {
  title: PropTypes.string,
};
NotesBlock.defaultProps = {
  title: 'Some notes',
};
export default NotesBlock;
