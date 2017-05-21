import React from 'react';
import Axios from 'axios';

import {
  Switch,
  Route,
} from 'react-router-dom';

import NotesContainer from './Note/NotesContainer';
import NoteViewer from './Note/NoteViewer/NoteViewer';
import NotFound from './NotFound/NotFound';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = { notes: [], activeNote: {} };
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
      <div className='container'>

        <Switch>
          <Route
            exact path='/'
            render={ () => (
              <div className='row'>
                <NoteViewer
                  note={ this.state.activeNote }
                  doneAction={ this.noteModified }
                />
                <NotesContainer
                  title='Last Recently Used'
                  notes={ this.state.notes }
                  handlerSelectNote={ this.selectNote }
                />
              </div>
            ) }
          />
          <Route
            path='/folders'
            render={ () => (<h1>FOLDERS must have its own component,
            which encapsulates FolderViewer and  maybe NotesContainer</h1>) }
          />

          <Route
            path='*'
            component={ NotFound }
          />
        </Switch>
      </div>
    );
  }
}

export default AppContainer;
