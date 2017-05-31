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
    this.props.handlerSelectFolderInNotesView(selectedOption.value);
  }

  render() {
    const { folders } = this.props;
    return (
      <div className='folder-select'>
        <input
          type='text'
          className='folder-select__input'
          name='folder-select--input'
          list='folders-list'
        />
        <select
          className='folder-select__folder-list'
          id='folders-list'
          onChange={ this.handlerFolderPick }
        >
          { folders.map(folder => (
            <option value={ folder.id }>{ folder.title} </option>
          )) }
        </select>
      </div>
    );
  }
}
export default FolderSelector;
