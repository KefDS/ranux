import React from 'react';
import './_folder-selector.scss';

class FolderSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { folders } = this.props;
    return (
      <div className='folder-select'>
        <input type='text' className='folder-select__add-folder' />
        <button type='button' className='actions-area__add-btn'>
          <i className='fa fa-plus' aria-hidden='true' />
        </button>
        <ul className='folder-select__folder-list' maxLength='50'>
          { folders != null ? folders.map(folder => (
            <li>{folder.title}</li>
          )) : <li /> }
        </ul>
      </div>
    );
  }
}
export default FolderSelector;
