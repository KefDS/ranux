import React from 'react';
import NoteActions from './NoteActions';

const NoteViewer = () => (
  <section className='note-viewer__form' action=''>
    <input
      type='text'
      placeholder='Title'
      className='form-control note-viewer__title'
    />
    <textarea
      placeholder='Take a note...'
      className='form-control note-viewer__textarea'
      rows='5'
    />
    <NoteActions modifier='--in-add' />
  </section>
);

export default NoteViewer;
