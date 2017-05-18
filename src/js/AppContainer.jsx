import React from 'react';
import NotesContainer from './Note/NotesContainer';
import NoteViewer from './Note/NoteViewer';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      activeNote: { id: '1', title: 'React', content: 'Active Note', isNewNote: true },
    };

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
    return modifiedNote.isNewNote ? this.state.notes.concat([modifiedNote]) :
    this.state.notes.map(note => (
      note.id === modifiedNote.id ? modifiedNote : note
    ));
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <NoteViewer
            note={ this.state.activeNote }
            noteAction={ this.noteModified }
          />
          <NotesContainer
            title='Last Recently Used'
            notes={ this.state.notes }
            noteAction={ this.selectNote }
          />
        </div>
      </div>
    );
  }
}

export default AppContainer;
