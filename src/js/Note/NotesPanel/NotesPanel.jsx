import React from 'react';
import { func, string, bool, arrayOf, shape } from 'prop-types';
import NotesContainer from '../NotesContainer';
import NoteViewer from '../NoteViewer/NoteViewer';

const NotesPanel = ({
  note,
  doneAction,
  deleteAction,
  deleteNoteNotesContainer,
  notes,
  handlerSelectNote,
  handlerColorPickView,
  handlerColorPickNotes,
  title,
  folders,
  tags,
  handlerSelectFolderInNotesView,
}) => (
  <div className='row'>
    <NoteViewer
      note={ note }
      doneAction={ doneAction }
      deleteAction={ deleteAction }
      handlerColorPick={ handlerColorPickView }
      handlerSelectFolderInNotesView={ handlerSelectFolderInNotesView }
      folders={ folders }
      tags={ tags }
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
    id: string.isRequired,
    title: string,
    content: string,
    color: string,
    isNewNote: bool,
    folderId: string,
    tagsIds: arrayOf(string),
  }),

  notes: arrayOf(
    shape({
      id: string.isRequired,
      title: string,
      content: string,
      color: string,
      isNewNote: bool,
      folderId: string,
      tagsIds: arrayOf(string),
    }),
  ),

  doneAction: func.isRequired,
  deleteAction: func.isRequired,
  deleteNoteNotesContainer: func.isRequired,

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
