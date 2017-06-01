import React from 'react';
import PropTypes from 'prop-types';
import './_folder.scss';

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHelper = this.onClickHelper.bind(this);
    this.onBlurHelper = this.onBlurHelper.bind(this);
    this.onChangeHelper = this.onChangeHelper.bind(this);
    this.onKeyPressedHelper = this.onKeyPressedHelper.bind(this);

    this.state = {
      edited: false,
      value: this.props.title,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.title,
    });
  }
  onKeyPressedHelper(event) {
    if (event.keyCode === 13) {
      this.props.handlerSelectFolder(this.state.value);
    }
  }
  nFClick(event) {
    event.stopPropagation();
  }
  onBlurHelper() {
    if (this.state.edited) {
      this.setState({
        value: this.props.title,
        edited: false });
    }
  }
  onChangeHelper(event) {
    this.setState({
      value: event.target.value,
      edited: true });
  }

  onClickHelper() {
    const folder = {
      id: this.props.id,
      title: this.state.value,
    };
    this.props.handlerSelectFolder(folder);
  }
  render() {
    const { title, id } = this.props;
    const className = id === '0' ? 'folder new-folder' : 'folder';
    return (
      <article className={ className } onClick={ this.onClickHelper } >
        {id === '0'
              ?
                <input
                  className='folder__new-folder'
                  onBlur={ this.onBlurHelper }
                  value={ this.state.value }
                  onChange={ this.onChangeHelper }
                  onKeyDown={ this.onKeyPressedHelper }
                  onClick={ this.nFClick }
                />
              : <p className='folder__folder-name'>{title}</p>
            }

      </article>
    );
  }
  }

Folder.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  handlerSelectFolder: PropTypes.func.isRequired,
};

Folder.defaultProps = {
  title: 'New Folder',
};

export default Folder;
