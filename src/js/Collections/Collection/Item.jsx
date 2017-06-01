import React from 'react';
import PropTypes from 'prop-types';
import './_folder.scss';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHelper = this.onClickHelper.bind(this);
    this.onBlurHelper = this.onBlurHelper.bind(this);
    this.onChangeHelper = this.onChangeHelper.bind(this);
    this.onKeyPressedHelper = this.onKeyPressedHelper.bind(this);
    this.onInputClick = this.onInputClick.bind(this);
    this.state = {
      edited: false,
      value: this.props.title,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.title,
    });
  }
  onKeyPressedHelper(event) {
    if (event.keyCode === 13) {
      this.props.handlerSelectItem(this.state.value);
    }
  }
  onInputClick(event) {
    event.stopPropagation();
    this.setState({
      value: '',
    });
  }
  onBlurHelper() {
    this.setState({
      value: this.props.title,
      edited: false });
  }
  onChangeHelper(event) {
    this.setState({
      value: event.target.value,
      edited: true });
  }

  onClickHelper() {
    const item = {
      id: this.props.id,
      title: this.state.value,
    };
    this.props.handlerSelectItem(item);
  }
  render() {
    const { title, id } = this.props;
    const className = id === '0' ? 'item new-item' : 'item';
    return (
      <article className={ className } onClick={ this.onClickHelper } >
        {id === '0'
              ?
                <input
                  className='item__new-item'
                  onBlur={ this.onBlurHelper }
                  value={ this.state.value }
                  onChange={ this.onChangeHelper }
                  onKeyDown={ this.onKeyPressedHelper }
                  onClick={ this.onInputClick }
                />
              : <p className='item__item-name'>{title}</p>
            }

      </article>
    );
  }
  }

Item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  handlerSelectItem: PropTypes.func.isRequired,
};

Item.defaultProps = {
  title: 'New item',
};

export default Item;
