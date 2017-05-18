import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ color, title, content }) => (
  <article className={ `note ${color}` }>
    <p className='note__note-name'>
      {title}
    </p>
    <p className='note__note-content'>
      {content}
    </p>
  </article>
);

Note.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

Note.defaultProps = {
  color: 'green',
  title: '',
  content: '',
};

export default Note;
