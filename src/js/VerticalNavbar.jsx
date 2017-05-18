import React from 'react';

const VerticalNavbar = () => (
  <nav id='verticalNavbar' className='v-navbar'>
    <li>
      <a href='' data-toggle='tooltip' title='Notes'>
        <i className='fa fa-file' />
      </a>
    </li>
    <li>
      <a href='' data-toggle='tooltip' title='Folders'>
        <i className='fa fa-folder' aria-hidden='true' />
      </a>
    </li>
    <li>
      <a href='' data-toggle='tooltip' title='Tags'>
        <i className='fa fa-tag' aria-hidden='true' />
      </a>
    </li>
    <li>
      <a href='' data-toggle='tooltip' title='Archived Notes'>
        <i className='fa fa-archive' aria-hidden='true' />
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
