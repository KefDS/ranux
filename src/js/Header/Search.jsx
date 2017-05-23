import React from 'react';
import { string, func } from 'prop-types';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmitSearchButton = this.handleSubmitSearchButton.bind(this);
  }

  handleOnChange(evt) {
    this.props.searchTermGetValue(evt.target.value);
  }

  handleSubmitSearchButton() {
    this.props.searchAction();
  }

  render() {
    const { faIcon, searchTerm } = this.props;
    return (
      <div className='navbar-form search-form'>
        <input
          type='search'
          className='form-control search-form__input'
          placeholder='Search'
          onChange={ this.handleOnChange }
          value={ searchTerm }
        />
        <button
          type='submit'
          className='btn btn-default search-form__btn'
          onClick={ this.handleSubmitSearchButton }
        >
          <i className={ `fa fa-${faIcon}` } aria-hidden='true' />
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  faIcon: string.isRequired,
  searchTerm: string,
  searchAction: func.isRequired,
  searchTermGetValue: func.isRequired,
};

Search.defaultProps = {
  searchTerm: '',
};
