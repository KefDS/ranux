import React from 'react';
import { bool, number, func, string, arrayOf, shape } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import NotesPanel from '../Note/NotesPanel/NotesPanel';
import FolderContainer from './FolderContainer/FolderContainer';

class FolderPanel extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { title, folders, handlerSelectFolder,
      note, handlerSelectNote, handlerColorPickNotes,
      deleteAction, doneAction, handlerColorPickView,
      handlerSelectFolderInNotesCont, createFolder, tags, handlerSelectFolderInNotesView,
      deleteNoteNotesContainer, getFolderNotes, getFolderTitle } = this.props;
    return (
      <div className='row'>
        <Switch>
          <Route
            exact path='/folders' render={ () => (
              <FolderContainer
                title={ title }
                folders={ folders }
                handlerSelectFolder={ handlerSelectFolder }
                createFolder={ createFolder }
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
                notes={ getFolderNotes(match.params.id) }
                handlerSelectNote={ handlerSelectNote }
                handlerSelectFolderInNotesCont={ handlerSelectFolderInNotesCont }
                handlerSelectFolderInNotesView={ handlerSelectFolderInNotesView }
                handlerColorPickView={ handlerColorPickView }
                folders={ folders }
                tags={ tags }
                handlerColorPickNotes={ handlerColorPickNotes }
                title={ `${getFolderTitle(match.params.id)} Notes` }
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
