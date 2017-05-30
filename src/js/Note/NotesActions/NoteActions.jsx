import React from 'react';
import PropTypes from 'prop-types';

import './_note-actions.scss';

import NoteColorSelector from './NoteColorSelector';
import NoteAction from './NoteAction';
import FolderSelector from './FolderSelector';

const tagDoneAction = (modifier, doneAction, color) => {
  let tag = null;
  if (doneAction !== null) {
    tag = (<button
      type='submit'
      className={ `btn btn-block actions-area-btn actions-area-btn${modifier}
      actions-area__done actions-area__done${modifier} ${color}` }
      onClick={ doneAction }
    >
      <i className='fa fa-check' aria-hidden='true' />
    </button>);
  }
  return tag;
};
const NoteActions = ({ folders, modifier, doneAction, deleteAction, handlerColorPick, color }) => (
  <div className={ `actions-area actions-area${modifier}` }>
    <NoteAction faIcon='paint-brush' modifier={ `${modifier} pick-color` } action={ () => {} } />
    <NoteColorSelector handlerColorPick={ handlerColorPick } />
    <NoteAction faIcon='folder' modifier={ `${modifier} pick-folder` } action={ () => {} } />
    <FolderSelector folders={ folders } />
    <NoteAction faIcon='tag' modifier={ modifier } action={ () => {} } />
    { tagDoneAction(modifier, doneAction, color) }
    <NoteAction faIcon='trash' modifier={ `${modifier} actions-area__trash-btn` } action={ deleteAction } />
  </div>
  );

NoteActions.propTypes = {
  modifier: PropTypes.string,
  doneAction: PropTypes.func,
  deleteAction: PropTypes.func.isRequired,
  handlerColorPick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

NoteActions.defaultProps = {
  modifier: '',
  color: 'green',
  doneAction: () => (console.log('no done action')),
};

export default NoteActions;
