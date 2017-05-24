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

  setValue(field, event) {
    // If the input fields were directly within this
    // this component, we could use this.refs.[FIELD].value
    // Instead, we want to save the data for when the form is submitted
    const object = { note: {} };
    object.note[field] = event.target.value;
    this.setState({
      note: Object.assign(this.state.note, object.note),
    });
  }

  handleSubmitButton() {
    // TODO: set folder that contains the note
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
            onChange={ this.setValue.bind(this, 'title') }
          />
          <textarea
            className='form-control note-viewer__textarea'
            placeholder='Take a note...'
            value={ note.content }
            onChange={ this.setValue.bind(this, 'content') }
            rows='10'
          />
          <NoteActions
            modifier='--in-add'
            doneAction={ this.handleSubmitButton }
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
