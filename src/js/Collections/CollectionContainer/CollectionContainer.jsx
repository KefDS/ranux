import React from 'react';
import { Link } from 'react-router-dom';
import { number, func, string, arrayOf } from 'prop-types';
import Item from '../Collection/Item';

const CollectionContainer = ({ items, createItem, title, handlerSelectItem }) => (
  <section className='col-xs-11 col-xs-offset-1'>
    <h2 className='title'>{title}</h2>
    <div className='items-container'>
      {items.map(folder => <Link to={ `/folders/${folder.id}` }>
        <Item { ...folder } handlerSelectItem={ handlerSelectItem } />
      </Link>)}
      <Item
        id='0'
        title='New Folder'
        handlerSelectItem={ createItem }
      />

    </div>
  </section>
);

CollectionContainer.propTypes = {
  items: arrayOf({
    id: number.isRequired,
    title: string,
  }),
  title: string,
  handlerSelectItem: func.isRequired,
};

CollectionContainer.defaultProps = {
  items: [],
  title: 'items',
};

export default CollectionContainer;
