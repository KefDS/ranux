import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ faIcon, action }) => (
  <div className='navbar-form search-form'>
    <input
      type='search'
      className='form-control search-form__input'
      placeholder='Search'
    />
    <button
      type='submit'
      className='btn btn-default search-form__btn'
      onClick={ action }
    >
      <i className={ `fa fa-${faIcon}` } aria-hidden='true' />
    </button>
  </div>
);

Search.propTypes = {
  faIcon: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Search;
