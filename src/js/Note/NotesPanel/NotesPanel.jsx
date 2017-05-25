import React from 'react';
import NotesContainer from '../NotesContainer';
import NoteViewer from '../NoteViewer/NoteViewer';

const NotesPanel = ({ note, doneAction, notes, handlerSelectNote, handlerColorPick, title }) => (
  <div className='row'>
    <NoteViewer
      note={ note }
      doneAction={ doneAction }
      handlerColorPick={ handlerColorPick }
    />
    <NotesContainer
      title={ title }
      notes={ notes }
      handlerSelectNote={ handlerSelectNote }
    />
  </div>
);

export default NotesPanel;
