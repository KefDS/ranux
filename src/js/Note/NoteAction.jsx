import React from 'react';
import PropTypes from 'prop-types';

const NoteAction = ({ faIcon, action }) => (
  <button
    type='button'
    className='actions-area__archive actions-area-btn actions-area-btn--in-add'
    onClick={ action }
  >
    <i className={ `fa fa-${faIcon}` } aria-hidden='true' />
  </button>
);

NoteAction.propTypes = {
  faIcon: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default NoteAction;
