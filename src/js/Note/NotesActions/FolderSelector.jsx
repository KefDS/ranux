import React from 'react';
import './_folder-selector.scss';

class FolderSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handlerFolderPick = this.handlerFolderPick.bind(this);
  }

  handlerFolderPick(event) {
    const selectTag = event.target;
    const selectedOption = selectTag.options[selectTag.selectedIndex];
    this.props.handlerSelectFolder(selectedOption.value);
  }

  render() {
    const { folders, selectedFolder } = this.props;
    return (
      <div className='folder-select'>
        <select
          className='folder-select__folder-list'
          id='folders-list'
          onChange={ this.handlerFolderPick }
        >
          { folders.map(folder => (
              folder.id === selectedFolder ?
                <option selected value={ folder.id }>{ folder.title} </option> :
                <option value={ folder.id }>{ folder.title} </option>
          )) }
        </select>
      </div>
    );
  }
  }
export default FolderSelector;
