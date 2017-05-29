import React from 'react';
import { Link } from 'react-router-dom';

import './_verticalNavbar.scss';

export default class VerticalNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.wasScrollEventTriggered = false;
    this.isViewportAfterNavbar = this.isViewportAfterNavbar.bind(this);
    this.setPaddingTopClassVNavbar = this.setPaddingTopClassVNavbar.bind(this);
    this.sideNavbarChangeWithNavbar = this.sideNavbarChangeWithNavbar.bind(this);
    this.sideNavbarChangeWithoutNavbar = this.sideNavbarChangeWithoutNavbar.bind(this);
    this.moveSideBar = this.moveSideBar.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.moveSideBar);
  }

  setPaddingTopClassVNavbar(padding) {
    document.getElementById('verticalNavbar').style.paddingTop = `${padding}px`;
  }

  sideNavbarChangeWithNavbar() {
    this.setPaddingTopClassVNavbar(75);
  }

  sideNavbarChangeWithoutNavbar() {
    this.setPaddingTopClassVNavbar(0);
  }

  moveSideBar() {
    // Guard clause
    if (this.wasScrollEventTriggered && this.isViewportAfterNavbar()) return;
    if (this.isViewportAfterNavbar()) {
      this.sideNavbarChangeWithoutNavbar();
      this.wasScrollEventTriggered = true;
    } else if (this.wasScrollEventTriggered) {
      this.sideNavbarChangeWithNavbar();
      this.wasScrollEventTriggered = false;
    }
  }

  isViewportAfterNavbar() {
    const navbarHeight = 50;
    return document.body.scrollTop > navbarHeight ||
      document.documentElement.scrollTop > navbarHeight;
  }

  render() {
    return (
      <nav id='verticalNavbar' className='v-navbar'>
        <li>
          <Link to='/'>
            <i className='fa fa-file' />
          </Link>
        </li>
        <li>
          <Link to='/folders'>
            <i className='fa fa-folder' aria-hidden='true' />
          </Link>
        </li>
        <li>
          <a href='' data-toggle='tooltip' title='Tags'>
            <i className='fa fa-tag' aria-hidden='true' />
          </a>
        </li>
        <li>
          <a href='' data-toggle='tooltip' title='Trash'>
            <i className='fa fa-trash' aria-hidden='true' />
          </a>
        </li>
      </nav>
    );
  }
}
