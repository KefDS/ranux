import React from 'react';
import Folder from '../Folder/Folder';

const FolderContainer = ({ folders, title, handlerSelectFolder }) => (
  <section className='col-xs-11 col-xs-offset-1'>
    <h2>{title}</h2>
    <div className='folders-container'>
      {folders.map(folder => <Folder { ...folder } handlerSelectFolder={ handlerSelectFolder } />)}
    </div>
  </section>
);

export default FolderContainer;
