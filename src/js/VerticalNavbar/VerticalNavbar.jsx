import React from 'react';
import { Link } from 'react-router-dom';

import './_verticalNavbar.scss';

const VerticalNavbar = () => (
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

export default VerticalNavbar;
