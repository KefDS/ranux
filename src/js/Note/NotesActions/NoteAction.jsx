import React from 'react';
import PropTypes from 'prop-types';

import './_note-actions.scss';

const NoteAction = ({ faIcon, action, modifier }) => (
  <button
    type='button'
    className={ `actions-area-btn actions-area-btn${modifier}` }
    onClick={ action }
  >
    <i className={ `fa fa-${faIcon}` } aria-hidden='true' />
  </button>
);

NoteAction.propTypes = {
  faIcon: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  modifier: PropTypes.string,
};


NoteAction.defaultProps = {
  modifier: '',
};

export default NoteAction;
