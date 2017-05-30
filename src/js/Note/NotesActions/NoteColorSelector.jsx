import React from 'react';
import { func } from 'prop-types';

class NoteColorSelector extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(color, event) {
    event.stopPropagation();
    this.props.handlerColorPick(color);
  }
  render() {
    return (
      <div className='palette' id='note-viewer-palette'>
        <button type='button' onClick={ this.onClick.bind(null, 'red') } className='red palette__btn' />
        <button type='button' onClick={ this.onClick.bind(null, 'orange') } className='orange palette__btn' />
        <button type='button' onClick={ this.onClick.bind(null, 'green') } className='green palette__btn' />
        <button type='button' onClick={ this.onClick.bind(null, 'lime') } className='lime palette__btn' />
        <button type='button' onClick={ this.onClick.bind(null, 'blue') } className='blue palette__btn' />
      </div>);
  }
}

NoteColorSelector.propTypes = {
  handlerColorPick: func.isRequired,
};

export default NoteColorSelector;
