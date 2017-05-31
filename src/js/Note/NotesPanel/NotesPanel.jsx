import React from 'react';
import { func, string, number, bool, arrayOf, shape } from 'prop-types';
import NotesContainer from '../NotesContainer';
import NoteViewer from '../NoteViewer/NoteViewer';

const NotesPanel = ({ note, doneAction, deleteAction,
  deleteNoteNotesContainer, notes, handlerSelectNote,
  handlerColorPickView, handlerColorPickNotes,
  handlerSelectFolderInNotesView, title, folders }) => (
    <div className='row'>
      <NoteViewer
        note={ note }
        doneAction={ doneAction }
        deleteAction={ deleteAction }
        handlerColorPick={ handlerColorPickView }
        handlerSelectFolderInNotesView={ handlerSelectFolderInNotesView }
        folders={ folders }
      />
      <NotesContainer
        title={ title }
        notes={ notes }
        folders={ folders }
        handlerSelectNote={ handlerSelectNote }
        handlerColorPick={ handlerColorPickNotes }
        deleteNoteNotesContainer={ deleteNoteNotesContainer }
      />
    </div>
  );

NotesPanel.propTypes = {
  note: shape({
    id: number.isRequired,
    title: string,
    content: string,
    color: string,
    isNewNote: bool,
  }),
  doneAction: func.isRequired,
  deleteAction: func.isRequired,
  deleteNoteNotesContainer: func.isRequired,
  notes: arrayOf({
    id: number.isRequired,
    title: string.isRequired,
    folderId: number,
  }),
  handlerSelectNote: func.isRequired,
  handlerColorPickView: func.isRequired,
  handlerColorPickNotes: func.isRequired,
  title: string,
};
NotesPanel.defaultProps = {
  notes: [],
  title: 'Notes',
  note: {},
};

export default NotesPanel;
