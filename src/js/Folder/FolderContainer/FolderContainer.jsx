import React from 'react';
import { Link } from 'react-router-dom';
import { number, func, string, arrayOf } from 'prop-types';
import Folder from '../Folder/Folder';

const FolderContainer = ({ folders, createFolder, title, handlerSelectFolder }) => (
  <section className='col-xs-11 col-xs-offset-1'>
    <h2 className='title'>{title}</h2>
    <div className='folders-container'>
      {folders.map(folder => <Link to={ `/folders/${folder.id}` }>
        <Folder { ...folder } handlerSelectFolder={ handlerSelectFolder } />
      </Link>)}
      <Folder
        id='0'
        title='New Folder'
        handlerSelectFolder={ createFolder }
      />

    </div>
  </section>
);

FolderContainer.propTypes = {
  folders: arrayOf({
    id: number.isRequired,
    title: string,
  }),
  title: string,
  handlerSelectFolder: func.isRequired,
};

FolderContainer.defaultProps = {
  folders: [],
  title: 'Folders',
};

export default FolderContainer;
