import React from 'react';
import FolderContainer from './FolderContainer/FolderContainer';

class FolderPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, folders, handlerSelectFolder } = this.props;
    return (
      <div className='row'>
        <FolderContainer
          title={ title }
          folders={ folders }
          handlerSelectFolder={ handlerSelectFolder }
        />
      </div>
    );
  }
}
export default FolderPanel;
