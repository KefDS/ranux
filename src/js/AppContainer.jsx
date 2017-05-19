import React from 'react';

import NotesContainer from './Note/NotesContainer';
import NoteViewer from './Note/NoteViewer/NoteViewer';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;

    this.state = {
      notes: [
        {
          id: 1000,
          title: 'React Notes',
          content: 'React :-D',
        },
        {
          id: 1001,
          title: 'Angular Notes',
          content: 'Angular :-|',
        },
        {
          id: 1002,
          title: 'PHP Notes',
          content: 'PHP >:-(',
        },
        {
          id: 1003,
          title: 'Ruby Notes',
          content: 'Ruby <3 ;-)',
        },
      ],
      activeNote: {
        id: 0,
        isNewNote: true,
      },
    };

    this.selectNote = this.selectNote.bind(this);
    this.noteModified = this.noteModified.bind(this);
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
      </div>
    );
  }
}

export default AppContainer;
