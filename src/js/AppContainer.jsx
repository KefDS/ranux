import React from 'react';
import NotesContainer from './Note/NotesContainer';
import NoteViewer from './Note/NoteViewer';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [], activeNote: {} };
    this.selectNote = this.selectNote.bind(this);
    this.noteModified = this.noteModified.bind(this);
  }

  selectNote(note) {
    this.setState({
      activeNote: note,
    });
  }

  noteModified(modifiedNote) {
    this.setState({
      notes: this.handleActiveNote(modifiedNote),
    });
  }

  handleActiveNote(modifiedNote) {
    return modifiedNote.isNewNote ? this.state.concat([modifiedNote]) :
    this.state.notes.map(note => (
      note.id === modifiedNote.id ? modifiedNote : note
    ));
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <NoteViewer
            activeNote={ this.state.activeNote }
            note={ this.selectNote }
          />
          <NotesContainer
            title='Last Recently Used'
            notes={ this.state.notes }
            noteAction={ this.noteModified }
          />
        </div>
      </div>
    );
  }
}

export default AppContainer;
