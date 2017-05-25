import React from 'react';
import NotesContainer from '../NotesContainer';
import NoteViewer from '../NoteViewer/NoteViewer';

const NotesPanel = ({ note, doneAction, deleteAction, notes, handlerSelectNote, handlerColorPickView, handlerColorPickNotes, title }) => (
  <div className='row'>
    <NoteViewer
      note={ note }
      doneAction={ doneAction }
      deleteAction={ deleteAction }
      handlerColorPick={ handlerColorPickView }
    />
    <NotesContainer
      title={ title }
      notes={ notes }
      handlerSelectNote={ handlerSelectNote }
      handlerColorPick={ handlerColorPickNotes }
    />
  </div>
);

export default NotesPanel;
