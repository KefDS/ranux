import React from 'react';
import PropTypes from 'prop-types';
import NoteActions from '../NotesActions/NoteActions';
import './_note.scss';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHelper = this.onClickHelper.bind(this);
  }

  onClickHelper() {
    const note = {
      id: this.props.id,
      title: this.props.title,
      content: this.props.content,
      color: this.props.color,
    };
    this.props.handlerSelectNote(note);
  }
  render() {
    const { color, title, content } = this.props;
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
};

Note.defaultProps = {
  color: 'green',
  title: '',
  content: '',
};

export default Note;
