import React from 'react';

// TODO: Each color needs to be a component?
const NoteColorSelector = () => (
  <div className='palette' id='note-viewer-palette'>
    <button type='button' className='red palette__btn' />
    <button type='button' className='yellow palette__btn' />
    <button type='button' className='green palette__btn' />
  </div>
);

export default NoteColorSelector;
