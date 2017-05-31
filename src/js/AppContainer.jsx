import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ApiCommunicator from './services/ApiCommunicator';

import NotFound from './NotFound/NotFound';
import NotesPanel from './Note/NotesPanel/NotesPanel';
import FolderPanel from './Folder/FolderPanel';
import Header from '../js/Header/Header';
import VerticalNavbar from '../js/VerticalNavbar/VerticalNavbar';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.apiCommunicator = new ApiCommunicator('http://localhost:3000/api');
    this.counter = 0;
    this.state = {
      data: {
        activeNote: this.getDefaultActiveNote(),
        notes: [],
        folders: [],
        tags: [],
      },
      search: {
        searchTerm: '',
        searchScope: 'notes',
        searchResults: [],
      },
    };

    this.bindOwnMethods();
  }

  bindOwnMethods() {
    this.selectNote = this.selectNote.bind(this);
    this.selectFolder = this.selectFolder.bind(this);
    this.noteModified = this.noteModified.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlerColorPickView = this.handlerColorPickView.bind(this);
    this.handlerColorPickNotes = this.handlerColorPickNotes.bind(this);
    this.getSearchValue = this.getSearchValue.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.deleteNoteNotesContainer = this.deleteNoteNotesContainer.bind(this);
    this.noteModifiedHelper = this.noteModifiedHelper.bind(this);
    this.handlerSelectFolderInNotesView = this.handlerSelectFolderInNotesView.bind(this);
    this.handlerSelectFolderInNotesCont = this.handlerSelectFolderInNotesCont.bind(this);
    this.getFolderNotes = this.getFolderNotes.bind(this);
    this.getFolderTitle = this.getFolderTitle.bind(this);
  }

  componentDidMount() {
    Promise.all([
      this.apiCommunicator.getNotes(),
      this.apiCommunicator.getFolders(),
      this.apiCommunicator.getTags(),
    ]).then((values) => {
      const serverData = values.map(data => data.map(item => this.setId(item)));
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          notes: serverData[0],
          folders: serverData[1],
          tags: serverData[2],
        },
      }));
      this.setSearchResults();
    });
  }

  // Private methods

  getFolderNotes(folderId = '') {
    const { notes } = this.state.data;
    return notes ? notes.filter(note => note.folderId === folderId) : notes;
  }

  getFolderTitle(folderId = '') {
    const { folders } = this.state.data;
    return folders
      ? folders.filter(folder => folder.id === folderId).pop().title
      : 'A folder';
  }

  filterByTitle(collection, match) {
    return collection.filter(
      item => `${item.title}`.toUpperCase().indexOf(match.toUpperCase()) >= 0,
    );
  }

  setId(record) {
    return { ...record, id: record._id };
  }

  nextId() {
    this.counter += 1;
    return `${this.counter}`;
  }

  getDefaultActiveNote() {
    return {
      id: this.nextId(),
      title: '',
      content: '',
      color: 'green',
      isNewNote: true,
      folderId: '',
    };
  }

  getDefaultFolderId() {
    return this.state.data.folders
      .filter(folder => folder.title === 'Default')
      .pop().id;
  }

  modifyNote(note, field, value) {
    const noteObject = {};
    noteObject[field] = value;
    const newNote = Object.assign({}, note, noteObject);
    return newNote;
  }

  insertModifiedNote(note) {
    const { notes } = this.state.data;
    return note.isNewNote
      ? [note, ...notes]
      : notes.map(stateNote => (note.id === stateNote.id ? note : stateNote));
  }

  // Callbacks

  selectNote(note) {
    this.setState({
      data: { ...this.state.data, activeNote: note },
    });
  }

  noteModified(modifiedNote) {
    if (modifiedNote.isNewNote) {
      const newModifiedNote = modifiedNote.folderId === ''
        ? this.modifyNote(modifiedNote, 'folderId', this.getDefaultFolderId())
        : modifiedNote;
      this.noteModifiedHelper(this.apiCommunicator.newNote, newModifiedNote);
    } else {
      this.noteModifiedHelper(this.apiCommunicator.updateNote, modifiedNote);
    }
  }

  noteModifiedHelper(fn, modifiedNote) {
    fn(modifiedNote)
      .then((data) => {
        this.setState(prevState => ({
          data: {
            ...prevState.data,
            notes: this.insertModifiedNote(
              modifiedNote.isNewNote
                ? { ...modifiedNote, id: data._id }
                : modifiedNote,
            ),
            activeNote: this.getDefaultActiveNote(),
          },
        }));
        this.setSearchResults();
      })
      .catch(error => console.error(error));
  }

  getSearchValue(newSearchTerm) {
    this.setState({
      search: {
        ...this.state.search,
        searchTerm: newSearchTerm,
      },
    });
  }

  setSearchResults() {
    this.setState(prevState => ({
      search: { ...prevState.search, searchResults: prevState.data.notes },
    }));
  }

  handleSearch() {
    const { data, search } = this.state;
    // TODO: Filter by note or notebook depending of search scope

    // Note search
    this.setState({
      search: {
        ...this.state.search,
        searchResults: this.filterByTitle(data.notes, search.searchTerm),
      },
    });
  }

  handlerColorPickView(color) {
    this.setState({
      data: {
        ...this.state.data,
        activeNote: {
          ...this.state.data.activeNote,
          color,
        },
      },
    });
  }

  handlerColorPickNotes(note, color) {
    this.apiCommunicator.updateNote({ ...note, color }).then(() => {
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          notes: this.insertModifiedNote({ ...note, color }),
        },
      }));
      this.setSearchResults();
    });
  }

  handlerSelectFolderInNotesView(folderId) {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        activeNote: this.modifyNote(
          prevState.data.activeNote,
          'folderId',
          folderId,
        ),
      },
    }));
  }

  handlerSelectFolderInNotesCont(noteId, folderId) {
    console.log(`${folderId} mmm  ${noteId}`);
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        notes: prevState.data.notes.map(note => (
            note.id === noteId ?
            this.modifyNote(note, 'folderId', folderId) :
            note
          )),
      },
    }));
    this.setSearchResults();
  }

  deleteNote(note) {
    this.apiCommunicator.deleteNote(note.id).then(() => {
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          notes: prevState.data.notes.filter(
            stateNote => stateNote.id !== note.id,
          ),
          activeNote: this.getDefaultActiveNote(),
        },
      }));

      this.setSearchResults();
    });
  }

  deleteNoteNotesContainer(note) {
    this.apiCommunicator.deleteNote(note.id).then(() => {
      // Callback for note viewer
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          notes: prevState.data.notes.filter(
            stateNote => stateNote.id !== note.id,
          ),
          activeNote: note.id === this.state.data.activeNote.id
            ? this.getDefaultActiveNote()
            : prevState.data.activeNote,
        },
      }));
      this.setSearchResults();
    });
  }

  selectFolder(folder) {
    //  console.log(folder.title);
  }

  render() {
    const { data, search } = this.state;
    return (
      <div>
        <VerticalNavbar />
        <Header
          searchTerm={ search.searchTerm }
          searchTermGetValue={ this.getSearchValue }
          searchAction={ this.handleSearch }
        />
        <Route exact path='/' render={ () => <Redirect to='/notes' /> } />
        <div className='container'>
          <Switch>
            <Route
              path='/notes'
              render={ () => (
                <NotesPanel
                  note={ data.activeNote }
                  tags={ data.tags }
                  folders={ data.folders }
                  doneAction={ this.noteModified }
                  deleteNoteNotesContainer={ this.deleteNoteNotesContainer }
                  deleteAction={ this.deleteNote }
                  notes={ search.searchResults }
                  handlerSelectNote={ this.selectNote }
                  handlerColorPickView={ this.handlerColorPickView }
                  handlerColorPickNotes={ this.handlerColorPickNotes }
                  handlerSelectFolderInNotesView={ this.handlerSelectFolderInNotesView }
                  handlerSelectFolderInNotesCont={ this.handlerSelectFolderInNotesCont }
                  title={ 'Last Recently Used' }
                />
              ) }
            />
            <Route
              path='/folders'
              render={ () => (
                <FolderPanel
                  title='Your folders'
                  folders={ data.folders }
                  handlerSelectFolder={ this.selectFolder }
                  note={ data.activeNote }
                  doneAction={ this.noteModified }
                  deleteNoteNotesContainer={ this.deleteNoteNotesContainer }
                  deleteAction={ this.deleteNote }
                  notes={ search.searchResults }
                  handlerSelectNote={ this.selectNote }
                  handlerColorPickView={ this.handlerColorPickView }
                  handlerColorPickNotes={ this.handlerColorPickNotes }
                  handlerSelectFolderInNotesCont={ this.handlerSelectFolderInNotesCont }
                  handlerSelectFolderInNotesView={ this.handlerSelectFolderInNotesView }
                  getFolderNotes={ this.getFolderNotes }
                  getFolderTitle={ this.getFolderTitle }
                />
              ) }
            />
            <Route path='*' component={ NotFound } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppContainer;
