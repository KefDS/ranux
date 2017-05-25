import React from 'react';
import PropTypes from 'prop-types';

import './_note-actions.scss';

import NoteColorSelector from './NoteColorSelector';
import NoteAction from './NoteAction';
import FolderSelector from './FolderSelector';

const tagAction = (modifier, doneAction) => {
  let tag = null;
  if (doneAction !== null) {
    tag = (<button
      type='submit'
      value='Add new note'
      className={ `btn btn-default btn-block actions-area-btn actions-area-btn${modifier}
      actions-area__done actions-area__done${modifier}` }
      onClick={ doneAction }
    >
      <i className='fa fa-check' aria-hidden='true' />
    </button>);
  }
  return tag;
};
const NoteActions = ({ modifier, doneAction, deleteAction, handlerColorPick, color }) => (
  <div className={ `actions-area actions-area${modifier}` }>
    <NoteAction faIcon='paint-brush' modifier={ `${modifier} pick-color` } action={ () => {} } />
    <NoteColorSelector handlerColorPick={ handlerColorPick } />
    <NoteAction faIcon='folder' modifier={ `${modifier} pick-folder` } action={ () => {} } />
    <FolderSelector />
    <NoteAction faIcon='tag' modifier={ modifier } action={ () => {} } />
    { tagAction(modifier, doneAction) }
    <NoteAction faIcon='trash' modifier={ `${modifier} actions-area__trash-btn` } action={ deleteAction } />
    <div className={ `color-circle ${color}` } />
  </div>
  );

NoteActions.propTypes = {
  modifier: PropTypes.string,
  doneAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

NoteActions.defaultProps = {
  modifier: '',
};

export default NoteActions;
