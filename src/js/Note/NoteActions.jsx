import React from 'react';
import NoteColorSelector from './NoteColorSelector';
import NoteAction from './NoteAction';

const NoteActions = ({ modifier }) => (
  <div className={ `actions-area actions-area${modifier}` }>
    <NoteColorSelector />
    <NoteAction faIcon='paint-brush' action={ () => {} } />
    <NoteAction faIcon='archive' action={ () => {} } />
    <NoteAction faIcon='tag' action={ () => {} } />

    <button
      type='submit'
      value='Add new note'
      className={ `btn btn-default btn-block actions-area-btn actions-area-btn${modifier} 
      actions-area__done actions-area__done${modifier}` }
    >
      <i className='fa fa-check' aria-hidden='true' />
    </button>
  </div>
);

export default NoteActions;
