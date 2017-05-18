import React from 'react';
import { shape, string, func } from 'prop-types';
import NoteActions from './NoteActions';

export default class NoteViewer extends React.Component {
  constructor(props) {
    super(props);

    this.handleDoneNoteAction = this.handleDoneNoteAction.bind(this);
  }

  handleDoneNoteAction() {
    const title = document.getElementById('note_viewer_title').value;
    const content = document.getElementById('note_viewer_textarea').value;

    this.props.noteAction({ title, content, ...this.props.note });
  }

  render() {
    return (
      <section className='col-md-4 col-md-offset-1 note-viewer'>
        <section className='note-viewer__form'>
          <input
            id='note_viewer_title'
            type='text'
            placeholder='Note Title'
            className='form-control note-viewer__title'
            defaultValue={ this.props.note.title }
          />
          <textarea
            id='note_viewer_textarea'
            className='form-control note-viewer__textarea'
            placeholder='Take a note...'
            defaultValue={ this.props.note.content }
            rows='5'
          />
          <NoteActions modifier='--in-add' doneAction={ this.handleDoneNoteAction } />
        </section>
      </section>
    );
  }
}

NoteViewer.propTypes = {
  note: shape({
    title: string,
    content: string,
    color: string,
  }),

  noteAction: func,
};

NoteViewer.defaultProps = {
  note: {
    title: '',
    content: '',
    color: 'green',
  },

  noteAction: () => {},
};
