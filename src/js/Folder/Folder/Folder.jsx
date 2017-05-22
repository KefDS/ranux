import React from 'react';
import PropTypes from 'prop-types';
import './_folder.scss';

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHelper = this.onClickHelper.bind(this);
  }

  onClickHelper() {
    const folder = {
      id: this.props.id,
      title: this.props.title,
    };
    this.props.handlerSelectFolder(folder);
  }
  render() {
    const { title } = this.props;
    return (
      <article onClick={ this.onClickHelper } >
        <p className='folder__folder-name'>
          {title}
        </p>
        <i className='fa fa-folder-open' aria-hidden='true' />
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
