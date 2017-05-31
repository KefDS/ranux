import React from 'react';
import PropTypes from 'prop-types';
import NoteActions from '../NotesActions/NoteActions';
import './_note.scss';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHelper = this.onClickHelper.bind(this);
    this.onColorPickHelper = this.onColorPickHelper.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onClickHelper() {
    const note = {
      id: this.props.id,
      title: this.props.title,
      content: this.props.content,
      color: this.props.color,
      folderId: this.props.folderId,
    };
    this.props.handlerSelectNote(note);
  }

  onColorPickHelper(color) {
    const note = {
      id: this.props.id,
      title: this.props.title,
      content: this.props.content,
      color: this.props.color,
      folderId: this.props.folderId,
    };
    this.props.handlerColorPick(note, color);
  }

  onDelete(event) {
    event.stopPropagation();
    const note = {
      id: this.props.id,
      title: this.props.title,
      content: this.props.content,
      color: this.props.color,
    };
    this.props.deleteNoteNotesContainer(note);
  }

  render() {
    const { color, title, content, folders } = this.props;
    return (
      <article className={ `note ${color}` } onClick={ this.onClickHelper } >
        <p className='note__note-name'>
          {title}
        </p>
        <p className='note__note-content'>
          {content}
        </p>
        <NoteActions
          modifier='--in-note'
          color={ `${color}` }
          doneAction={ null }
          handlerColorPick={ this.onColorPickHelper }
          deleteAction={ this.onDelete }
          folders={ folders }
        />
      </article>
    );
  }
}
Note.propTypes = {
  id: PropTypes.number.isRequired,
  color: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  handlerSelectNote: PropTypes.func.isRequired,
  handlerColorPick: PropTypes.func.isRequired,
  deleteNoteNotesContainer: PropTypes.func.isRequired,
};

Note.defaultProps = {
  color: 'green',
  title: '',
  content: '',
};

export default Note;
