import React from 'react';
import Search from './Search';

import './_header.scss';

export default class Header extends React.Component {
  handleSearch() {
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className='navbar navbar-default custom-navbar'>
            <div className='container-fluid custom-navbar--push-left'>
              <div className='navbar-header'>
                <button
                  type='button'
                  className='navbar-toggle collapsed header'
                  data-toggle='collapse'
                  data-target='#bs-example-navbar-collapse-1'
                  aria-expanded='false'
                >
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='icon-bar' />
                  <span className='icon-bar' />
                  <span className='icon-bar' />
                </button>
                <section className='logo'>
                  <img src='src/assets/images/rana-ico-light.png' alt='logo' />
                </section>
              </div>
              <div
                className='collapse navbar-collapse'
                id='bs-example-navbar-collapse-1'
              >
                <div className='main-nav'>
                  <Search faIcon='search' action={ this.handleSearch } />
                  <ul className='nav  navbar-list navbar-right action-list '>
                    <li>
                      <a href=''>Notebooks</a>
                    </li>
                    <li>
                      <a href=''>Notes</a>
                    </li>
                    <li>
                      <a href=''>Account</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
