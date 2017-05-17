import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ faIcon, action }) => (
  <form className='navbar-form search-form'>
    <div className='form-group search-group'>
      <input
        type='search'
        className='form-control search-group__input'
        placeholder='Search'
      />
      <button
        type='submit'
        className='btn btn-default search-group__btn'
        onClick={ action }
      >
        <i className={ `fa fa-${faIcon}` } aria-hidden='true' />
      </button>
    </div>
  </form>
);

Search.propTypes = {
  faIcon: PropTypes.string,
  action: PropTypes.fun,
};
Search.defaultProps = {
  faIcon: 'Some notes',
  action: function pornhub() {},
};

export default Search;
