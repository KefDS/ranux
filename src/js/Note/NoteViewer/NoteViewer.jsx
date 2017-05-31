import React from 'react';
import { bool, func, string, arrayOf, shape } from 'prop-types';

import './_note-viewer.scss';

import NoteActions from '../NotesActions/NoteActions';
import TagSelection from '../../Tag/tagSelection';

export default class NoteViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.note,
    };

    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.setSelectedTags = this.setSelectedTags.bind(this);
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

  // callbacks

  setSelectedTags(selectedTags) {
    this.setState(prevState => ({
      note: {
        ...prevState.note,
        tagsIds: selectedTags,
      },
    }));
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
            folders={ this.props.folders }
            deleteAction={ this.props.deleteAction.bind(null, this.state.note) }
            color={ note.color }
            handlerColorPick={ this.props.handlerColorPick }
          />
        </section>
        <TagSelection
          tags={ this.props.tags }
          selectedTagsIds={ note.tagsIds }
          getSelectedTags={ this.setSelectedTags }
        />
      </section>
    );
  }
}

NoteViewer.propTypes = {
  note: shape({
    id: string.isRequired,
    title: string,
    content: string,
    color: string,
    notebookId: string,
    tagsIds: arrayOf(string),
    isNewNote: bool,
  }),

  tags: arrayOf(shape({
    id: string.isRequired,
    title: string.isRequired,
  })),

  doneAction: func.isRequired,
  deleteAction: func.isRequired,
  handlerColorPick: func.isRequired,
};

NoteViewer.defaultProps = {
  note: shape({
    title: '',
    content: '',
    color: 'green',
    folderId: 'default',
    tags: [],
    isNewNote: false,
  }),
};
