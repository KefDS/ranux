import React from 'react';

const NoteAction = ({ faIcon, action }) => (
  <button
    type='button'
    className='actions-area__archive actions-area-btn actions-area-btn--in-add'
    onClick={ action }
  >
    <i className={ `fa fa-${faIcon}` } aria-hidden='true' />
  </button>
);

export default NoteAction;
