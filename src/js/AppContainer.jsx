import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Axios from 'axios';

import NotFound from './NotFound/NotFound';
import NotesPanel from './Note/NotesPanel/NotesPanel';
import FolderPanel from './Folder/FolderPanel';
import Header from '../js/Header/Header';
import VerticalNavbar from '../js/VerticalNavbar/VerticalNavbar';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = {
      data: {
        activeNote: { id: this.nextId(), isNewNote: true },
        notes: [],
        folders: [],
        tags: [],
      },
      uiState: {
        showArea: '',
      },
      search: {
        searchTerm: '',
        searchScope: 'notes',
        searchResults: [],
      },
    };

    this.selectNote = this.selectNote.bind(this);
    this.noteModified = this.noteModified.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getSearchValue = this.getSearchValue.bind(this);
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/db/')
      .then((response) => {
        this.setState(prevState => ({
          data: {
            ...prevState.data,
            notes: response.data.notes,
            folders: response.data.folders,
            tags: response.data.tags,
          },
        }));
        this.setSearchResults();
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  // Privates methods

  getNotesByFolders(folderId = 0) {
    const { folders, notes } = this.state.data;
    return folderId === 0
      ? notes
      : folders.filter(folder => folder.id === folderId).pop().notes;
  }

  filterByTitle(collection, match) {
    return collection.filter(
      item => `${item.title}`.toUpperCase().indexOf(match.toUpperCase()) >= 0,
    );
  }

  nextId() {
    this.counter += 1;
    return this.counter;
  }

  insertModifiedNote(note) {
    const { notes } = this.state.data;
    return note.isNewNote
      ? notes.concat([note])
      : notes.map(stateNote => (note.id === stateNote.id ? note : stateNote));
  }

  // Callbacks

  selectNote(note) {
    this.setState({
      data: { ...this.state.data, activeNote: note },
    });
  }

  noteModified(modifiedNote) {
    this.setState({
      data: {
        notes: this.insertModifiedNote(modifiedNote),
        activeNote: {
          title: '',
          content: '',
          id: this.nextId(),
          isNewNote: true,
        },
      },
    });

    this.setSearchResults();
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

  selectFolder(folder) {
    console.log(folder.title);
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
                  doneAction={ this.noteModified }
                  notes={ search.searchResults }
                  handlerSelectNote={ this.selectNote }
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
