import React from 'react';
import NotesContainer from '../NotesContainer';
import NoteViewer from '../NoteViewer/NoteViewer';

const NotesPanel = ({ note, doneAction, notes, handlerSelectNote, title }) => (
  <div className='row'>
    <NoteViewer
      note={ note }
      doneAction={ doneAction }
    />
    <NotesContainer
      title={ title }
      notes={ notes }
      handlerSelectNote={ handlerSelectNote }
    />
  </div>
);

export default NotesPanel;
