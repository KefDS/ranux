import React from 'react';
import { bool, number, func, string, arrayOf, shape } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import FolderContainer from './FolderContainer/FolderContainer';

class FolderPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  getFolderTitle(id) {
    return this.props.folders.filter(folder => (
      folder.id === id
    ))[0].title;
  }

  getFolderNotes(id) {
    return this.props.notes.filter(note => (
      note.folderId === id
    ));
  }

  render() {
    const { title, folders, handlerSelectFolder,
      note, handlerSelectNote, handlerColorPickNotes,
      deleteAction, doneAction, handlerColorPickView,
      deleteNoteNotesContainer } = this.props;
    return (
      <div className='row'>
        <Switch>
          <Route
            exact path='/folders' render={ () => (
              <FolderContainer
                title={ title }
                folders={ folders }
                handlerSelectFolder={ handlerSelectFolder }
              />
            ) }
          />
          <Route
            path='/folders/:id' render={ ({ match }) => (
              <NotesPanel
                note={ note }
                doneAction={ doneAction }
                deleteNoteNotesContainer={ deleteNoteNotesContainer }
                deleteAction={ deleteAction }
                notes={ this.getFolderNotes(match.params.id) }
                handlerSelectNote={ handlerSelectNote }
                handlerColorPickView={ handlerColorPickView }
                handlerColorPickNotes={ handlerColorPickNotes }
                title={ `${this.getFolderTitle(match.params.id)} Notes` }
              />

            ) }
          />

          <Route path='/folders/*' component={ NotFound } />


        </Switch>

      </div>
    );
  }
  }
FolderPanel.propTypes = {
  folders: arrayOf({
    id: number.isRequired,
    title: string.isRequired,
  }),
  title: string,
  handlerSelectFolder: func.isRequired,
  notes: arrayOf({
    id: number.isRequired,
    title: string.isRequired,
    folderId: number,
  }),
  note: shape({
    id: number.isRequired,
    title: string,
    content: string,
    color: string,
    isNewNote: bool,
  }),
  handlerSelectNote: func.isRequired,
  handlerColorPickNotes: func.isRequired,
  deleteAction: func.isRequired,
  doneAction: func.isRequired,
  handlerColorPickView: func.isRequired,
  deleteNoteNotesContainer: func.isRequired,
};

FolderPanel.defaultProps = {
  folders: [],
  title: 'Folders',
  notes: [],
  note: {},
};
export default FolderPanel;
