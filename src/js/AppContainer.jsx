import React from 'react';
import Axios from 'axios';

import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

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
      notes: [],
      activeNote: {},
      showArea: '',
      folders: [{
        title: 'New folder 1',
        id: 1,
      },
      {
        title: 'New folder 2',
        id: 2,
      },
      ] };
    this.selectNote = this.selectNote.bind(this);
    this.noteModified = this.noteModified.bind(this);
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/notes/')
    .then((response) => {
      this.setState({ notes: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  nextId() {
    this.counter += 1;
    return this.counter;
  }

  selectNote(note) {
    this.setState({
      activeNote: note,
    });
  }

  selectFolder(folder) {
    console.log(folder.title);
  }

  noteModified(modifiedNote) {
    this.setState({
      notes: this.handleActiveNote(modifiedNote),
      activeNote: {
        id: this.nextId(),
        isNewNote: true,
      },
    });
  }

  handleActiveNote(modifiedNote) {
    return modifiedNote.isNewNote
    ? this.state.notes.concat([modifiedNote])
    : this.state.notes.map(
      note => (note.id === modifiedNote.id ? modifiedNote : note),
    );
  }

  render() {
    return (
      <div>
        <VerticalNavbar />
        <Header />
        <Route
          exact path='/'
          render={ () => <Redirect to='/notes' /> }
        />
        <div className='container'>
          <Switch>
            <Route
              path='/notes'
              render={ () => (
                <NotesPanel
                  note={ this.state.activeNote }
                  doneAction={ this.noteModified }
                  notes={ this.state.notes }
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
                  folders={ this.state.folders }
                  handlerSelectFolder={ this.selectFolder }
                />
              ) }
            />
            <Route
              path='*'
              component={ NotFound }
            />
          </Switch>
        </div>
      </div>
    );
  }
  }

export default AppContainer;
