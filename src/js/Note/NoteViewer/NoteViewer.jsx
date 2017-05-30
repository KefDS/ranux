import React from 'react';
import { bool, number, func, string, arrayOf, shape } from 'prop-types';

import './_note-viewer.scss';

import NoteActions from '../NotesActions/NoteActions';

export default class NoteViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.note,
    };

    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      note: nextProps.note,
    });
  }


  setValue(field, value) {
    const object = { note: {} };
    object.note[field] = value;
    this.setState({
      note: Object.assign(this.state.note, object.note),
    });
  }
  setNote(field, event) {
    this.setValue(field, event.target.value);
  }

  handleSubmitButton() {
    // TODO: set folder that contains the note. By default is zero
    this.setValue('folderId', 0);
    this.props.doneAction(this.state.note);
  }

  render() {
    const { note } = this.state;
    return (
      <section className='col-md-4 col-md-offset-1 note-viewer'>
        <section className='note-viewer__form'>
          <input
            className='form-control note-viewer__title'
            type='text'
            placeholder='Note Title'
            value={ note.title }
            onChange={ this.setNote.bind(this, 'title') }
          />
          <textarea
            className='form-control note-viewer__textarea'
            placeholder='Take a note...'
            value={ note.content }
            onChange={ this.setNote.bind(this, 'content') }
            rows='10'
          />
          <NoteActions
            modifier='--in-add'
            doneAction={ this.handleSubmitButton }
            deleteAction={ this.props.deleteAction.bind(null, this.state.note) }
            color={ note.color }
            handlerColorPick={ this.props.handlerColorPick }
          />
        </section>
      </section>
    );
  }
}

NoteViewer.propTypes = {
  note: shape({
    id: number.isRequired,
    title: string,
    content: string,
    color: string,
    notebookId: number,
    tags: arrayOf(string),
    isNewNote: bool,
  }),

  doneAction: func.isRequired,
  deleteAction: func.isRequired,
  handlerColorPick: func.isRequired,
};

NoteViewer.defaultProps = {
  note: shape({
    title: '',
    content: '',
    color: 'green',
    notebookId: 501,
    tags: [],
    isNewNote: false,
  }),
};
